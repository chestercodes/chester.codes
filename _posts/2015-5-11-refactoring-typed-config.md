---
layout: post
title: Refactoring to typed configuration
excerpt: Refactoring ConfigurationManager calls to typed properties.
tags: 
- c-sharp
- refactoring
---


I was reading some code recently and was getting pretty sick of this pattern:

``` csharp
if(ConfigurationManager.AppSetting["SomeSetting"] != null){
	var someSetting = ConfigurationManager.AppSetting["SomeSetting"];	
	// Do something...
}
```

This checks whether the setting `"SomeSetting"` exists in the configuration and uses the value to do something. 

It's crime, you ask? 

I don't like the repetition of the use of the string literal `"SomeSetting"`, which is prone to speelling missteaks and leads to problems/hassle if the name ever changes. It is also likely that the setting is used somewhere else in the code, which means duplication of the null checks that check the existence of the setting.

### A solution ###

I wanted to wrap each configuration setting in a class that exposes an `Exists` property to do the work of the null check and a `Value` property to give the setting value. The instantiation of this class stores the string `"SomeSetting"` and it can be called as one, of many, static properties of a configuration class. There is also the advantage of being able to find all of the usages of the setting without string searching.

My first attempt lead to the code:

``` csharp
public class ProjectSetting
{
	private readonly string _settingName;

	public ProjectSetting(string settingName)
	{
		_settingName = settingName;
	}

	public string Value
	{
		get { return ConfigurationManager.AppSettings[_settingName]; }
	}

	public bool Exists
	{
		get { return Value != null; }
	}
}

public class ProjectConfiguration
{
	public static ProjectSetting SomeStringSetting = new ProjectSetting("someSetting");
}
```

Allowing the more readable code:

``` csharp
if (ProjectConfiguration.SomeSetting.Exists)
{
	var setting = ProjectConfiguration.SomeSetting.Value;
	// Do something...
}
```

Happy days!

### A different typeof ( Solution ) ###

All was well, until I saw that the config setting `someInt` being accessed and parsed into an `int` value in the code. I thought to myself, wouldn't it be nice if the `Value` of that setting was `int` typed already? This would remove the extra parsing required upon every accessing of the setting. 

From the App.config file:
	
``` xml

<?xml version="1.0" encoding="utf-8" ?>
<configuration>
	<startup> 
		<supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.5" />
	</startup>
	<appSettings>
		<add key="someSetting" value="This is a setting" />
		<add key="someInt" value="7" />
		<add key="someBool" value="true" />
	</appSettings>
</configuration> 
```

I wanted typed properties such that the `Value` property of the `ProjectSettings` classes would be typed `int` for `someInt` and `bool` for `someBool`. Value types can't be null and so need a way of expressing that the setting is not in the file. If the setting isn't in the file, it can't be parsed and so would need to throw an exception. 

I used my old friend generics to produce typed `Value` properties from the code:

```csharp

public class ProjectSetting<T>
	where T : struct
{
	private readonly string _settingName;

	public ProjectSetting(string settingName)
	{
		_settingName = settingName;
	}

	public T Value
	{
		get
		{
			var configurationValue = _GetConfigurationValue();

			if (configurationValue == null)
				throw new ConfigurationErrorsException(
					string.Format("Config setting {0} does not have a value!", _settingName));

			return (T) _ParseConfigurationValue(configurationValue);
		}
	}

	private object _ParseConfigurationValue(string configurationValue)
	{
		try
		{
			if (typeof (T) == typeof (bool))
				return bool.Parse(configurationValue);

			if (typeof (T) == typeof (int))
				return int.Parse(configurationValue);
		}
		catch (FormatException e)
		{
			throw new ConfigurationErrorsException(
				string.Format(
					"Can't parse the config setting {0} of value {1} to type {2}",
					_settingName,
					configurationValue,
					typeof (T)));
		}

		throw new NotSupportedException(
			string.Format("Config type {0} not supported.", typeof (T)));
	}

	private string _GetConfigurationValue()
	{
		return ConfigurationManager.AppSettings[_settingName];
	}

	public bool Exists
	{
		get { return _GetConfigurationValue() != null; }
	}
}

public class ProjectConfiguration
{
	public static ProjectSetting SomeStringSetting = new ProjectSetting("someSetting");
	public static ProjectSetting<int> SomeIntSetting = new ProjectSetting<int>("someInt");
	public static ProjectSetting<bool> SomeBoolSetting = new ProjectSetting<bool>("someBool");
}

```

We can see the typed-ness of the `int` type in visual studio:
![Alt int is typed](Int_typed.png)

### Nest get it on ###

The other advantage of wrapping the configuration is that you can nest and sort configuration settings that are related.

``` csharp
public class ProjectConfiguration
{
	public static ProjectSetting SomeStringSetting = new ProjectSetting("someSetting");
	public static ProjectSetting<int> SomeIntSetting = new ProjectSetting<int>("someInt");
	public static ProjectSetting<bool> SomeBoolSetting = new ProjectSetting<bool>("someBool");

	public class MegaCoolFeature
	{
		public static ProjectSetting FilePath = new ProjectSetting("megaCoolFeatureFilePath");
		public static ProjectSetting<int> TimesToCall = new ProjectSetting<int>("megaCoolFeatureTimesToCall");
	}
}
```

Which can be called with:

``` csharp
var configSetting = ProjectConfiguration.MegaCoolFeature.FilePath.Value;
```

For config files with lots of settings this can bring some order and cohesion. 

### Con(fig)clusion ###

Typed configuration isn't a new thing and [has been around since .NET v2](https://msdn.microsoft.com/en-us/library/8eyb2ct1.aspx). But if you are maintaining a code base that uses the ConfigurationManager way of accessing configuration files, then this is a nice way of making things that little bit cleaner.