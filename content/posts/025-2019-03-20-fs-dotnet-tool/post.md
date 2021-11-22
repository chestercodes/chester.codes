---
layout: post
title: Easy cli's with F#, Argu and dotnet tools 
excerpt: dotnet allows developers to easily create global tools. This post explores using F# and a library called Argu to create a cli.
issue: 25
tags: 
- fsharp
- dotnet
- argu
slug: "easy-clis-with-fsharp-and-dotnet-tools"
date: "2019-03-20"
category: Tech
---

dotnet has borrowed an idea from the `npm` world with the addition of [global tools](https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools). These allow easy creation of command line tools from `dotnet` projects and installation from nuget packages. 

At work we have many bits of .net based automation in the form of powershell scripts or random console projects. These automation tasks are generally kept in the project code repositories, wiki pages or random folders in developers' workstations. 

I decided it might be fun to make a workplace command-line interface to consolidate and organise this automation. This article describes the steps needed to make the `initech` command-line interface.

### Creating a CLI

The first thing that we need is a new F# project and solution. 

```powershell
dotnet new console -lang "F#" -n "Initech.Cli" -o "Initech.Cli" 
dotnet new sln -n "Initech.Cli"
dotnet sln "Initech.Cli.sln" add "Initech.Cli/Initech.Cli.fsproj"
```
This creates a new project with a `Program.fs`:

```fsharp
open System

[<EntryPoint>]
let main argv =
    printfn "Hello World from F#!"
    0 // return an integer exit code
```

This is a basic console application that just prints out the string `Hello World from F#!` and returns an exit code of 0.

To turn this into a `dotnet tool` we need to add a few nodes to the `Initech.Cli.fsproj` file to change it to:

```xml
<Project Sdk="Microsoft.NET.Sdk">
    <PropertyGroup>
        <OutputType>Exe</OutputType>
        <TargetFramework>netcoreapp2.1</TargetFramework>
        <PackAsTool>true</PackAsTool>
        <ToolCommandName>initech</ToolCommandName>
        <PackageOutputPath>../nupkg</PackageOutputPath>
    </PropertyGroup>
    <ItemGroup>
        <Compile Include="Program.fs" />
    </ItemGroup>
</Project>
```

The `PackAsTool` node specifies the project is a tool, the `ToolCommandName` is the name of the command as it going to be used, `initech` in our case. The `PackageOutputPath` node is the location that the `dotnet pack` command will produce a nuget package in the folder `nupkg`. 

We can create a package of the tool to the `nupkg` folder, install it from this folder and run it with the commands:

```powershell
dotnet pack .\Initech.Cli\Initech.Cli.fsproj /p:Version=1.2.3
dotnet tool install --global --add-source "./nupkg" "Initech.Cli"
initech 
```

And this will install and run the tool:

![CliInstall](/images/fsharp-tool/CliInstall.jpg)

### Getting argumentative

The cli is a bit basic, we need it to be able to accept and respond to user input via command line arguments, there is a useful F# nuget package for this purpose called [Argu](https://fsprojects.github.io/Argu/).
Argu allows the definition of arguments as a [discriminated union](https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/discriminated-unions) and deals with the displaying and parsing of arguments. 

We want the cli to be able to print a message to the output with the command `initech --print "Hello from the initech cli!"`. To do this we need a discriminated union to hold the possible cli arguments, we can define a `CmdArgs` type for this:

```fsharp
open Argu

type CmdArgs =
    | [<AltCommandLine("-p")>] Print of message:string
with
    interface IArgParserTemplate with
        member this.Usage =
            match this with
            | Print _ -> "Print a message"
```

The defines a `Print` argument that by convention can be specified with `--print` or by the `AltCommandLine` attribute specified `-p` and takes a `string` labelled `message` as it's data. The definition implements the `IArgParserTemplate` interface which specifies the string that is displayed on the command help. 

To use this type we need to create an `ArgumentParser<CmdArgs>` parser to turn the specified input array `argv` into a `ParseResults<CmdArgs>` value, that can then be queried for the arguments it contains with the `Contains` and `GetResult` methods. 
If no arguments are specified the cli should display the arguments, the parser can use a `ProcessExiter` to print out a friendly error if the wrong arguments are specified. 

### Print command

If a `Print` argument is specified then we want the cli to call `printfn` to print out the message to the console. The `Program.fs` file shows this desired behaviour:

```fsharp
open System
open Argu

type CliError =
    | ArgumentsNotSpecified

type CmdArgs =
    | [<AltCommandLine("-p")>] Print of message:string
with
    interface IArgParserTemplate with
        member this.Usage =
            match this with
            | Print _ -> "Print a message"

let getExitCode result =
    match result with
    | Ok () -> 0
    | Error err ->
        match err with
        | ArgumentsNotSpecified -> 1

let runPrint print = 
    printfn "%s" print
    Ok ()

[<EntryPoint>]
let main argv = 
    let errorHandler = ProcessExiter(colorizer = function ErrorCode.HelpText -> None | _ -> Some ConsoleColor.Red)
    let parser = ArgumentParser.Create<CmdArgs>(programName = "initech", errorHandler = errorHandler)
    
    match parser.ParseCommandLine argv with
    | p when p.Contains(Print) -> runPrint (p.GetResult(Print))
    | _ ->
        printfn "%s" (parser.PrintUsage())
        Error ArgumentsNotSpecified
    |> getExitCode

```

The cli needs to return a relevent exit code, it will return 0 if the command was successful and a non-zero number for other errors. The `CliError` type specifies the cli errors that aren't argument parsing, currently a single option of `ArgumentsNotSpecified`. 

The cli commands will either return that everything was OK, or that there was a `CliError`. This use case is nicely modelled by a `Result<unit, CliError>` type, which the `getExitCode` function can use to decide on the exit code. If the `ParseCommandLine` method returns something that contains a `Print` argument the `runPrint` function will be called and the `Result` type is created by `Ok ()`.

If no arguments are present then the match expression will print the `parser.PrintUsage()` and the `Error ArgumentsNotSpecified` will produce the `Result` returned. 

The cli behaviour is shown below:

![CliPrint](/images/fsharp-tool/CliPrint.jpg)

### Running a script

One of the main purposes of the `initech` cli is to run a collection of powershell scripts, one such script is the aptly named `GreatScript.ps1`, which takes a `$name` as a parameter and prints it out:

```powershell
param([string]$name)

Write-host "Name is: $name"
```

We need to include this script in the cli nuget package and project in a new `Scripts` directory by adding the following to the `Initech.Cli.fsproj` file:

```xml
<None Include="Scripts\GreatScript.ps1">
    <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
</None>
```

`dotnet` tool projects are stored in the `%USERPROFILE%\.dotnet\tools` folder once installed, we can get the path of the script by finding the `AppDomain.CurrentDomain.BaseDirectory` and combining it with `Scripts/GreatScript.ps1`. Nuget doesn't appreciate having unknown powershell scripts in the package and will complain during the `pack` command, but we can ignore these warnings.

To call the script we need to define some helper functions, which we can put into a new file and module called `Process`.

```fsharp
module Process

open System
open System.IO
open System.Diagnostics

let getScriptPath scriptName = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Scripts", scriptName)

type ScriptResultData = { Out: string list; Err: string list; Code: int }

type ScriptCallError =
    | ProgramException of Exception
    | ScriptError of ScriptResultData

let runProc filename args startDir = 
    printfn "Running process for file '%s' with args '%s'" filename args
    let timer = Stopwatch.StartNew()
    let procStartInfo = 
        ProcessStartInfo(
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            UseShellExecute = false,
            FileName = filename,
            Arguments = args )
        
    match startDir with 
    | Some d -> 
        procStartInfo.WorkingDirectory <- d
        printfn "Working directory is '%s'" d
    | _ -> 
        printfn "%s" "No working dir set"

    let outputs = System.Collections.Generic.List<string>()
    let errors = System.Collections.Generic.List<string>()
    
    let outputHandler f (_sender:obj) (args:DataReceivedEventArgs) = f args.Data
    let outHandler = outputHandler (fun s -> outputs.Add(s); printfn "%s" s)
    let errHandler = outputHandler (fun s -> errors.Add(s); printfn "%s" s)
    
    let p = new Process(StartInfo = procStartInfo)
    p.OutputDataReceived.AddHandler(DataReceivedEventHandler (outHandler))
    p.ErrorDataReceived.AddHandler(DataReceivedEventHandler (errHandler))
    
    try
        let started = p.Start()
        if started then
            p.BeginOutputReadLine()
            p.BeginErrorReadLine()
            p.WaitForExit()
            timer.Stop()
            printfn "Process finished in %ims" timer.ElapsedMilliseconds
            
            match outputs, errors with
            | out, _ when p.ExitCode = 0 -> Ok (Seq.toList out)
            | out, err -> Error (ScriptError {Out = Seq.toList out; Err = Seq.toList err; Code = p.ExitCode})
        else
            Error (ProgramException (Exception(sprintf "Failed to start process %s" filename)))
    with | ex ->
        ex.Data.Add("filename", filename)
        Error (ProgramException ex)

let runPsScript scriptName arguments wd =
    let scriptPath = getScriptPath scriptName
    let processArguments = sprintf "-noprofile -file \"%s\" %s " scriptPath arguments
    runProc "powershell.exe" processArguments wd
```

The `runProc` function starts a process that returns a `Result<string list, ScriptCallError>` which, if the exit code is 0 is a list of strings of the output, or a `ScriptCallError` which can be either an `Exception` if the process failed to start or a `ScriptResultData` that contains the stdout, stderr and exit code. The function `runPsScript` takes in the strings `scriptName` and `arguments` can be used to run a script and the `wd` argument can optionally run the script in a specified working directory.

### Run command

The `GreatScript.ps1` has it's own arguments that need to be visible and parsed from the cli, luckily the Argu library can parse sub commands with their own arguments. There will be many named scripts in the cli and I want to group them under a `run` sub command that can be used as:

```powershell
initech run great-script --name "Chester"
```

In this invocation `great-script` is a sub command of `run` which is a sub command of `initech` and it's easy to define sub command arguments using the `ParseResults<>` type. `run` has arguments type of `RunArgs` which contains an argument named `Great_Script` of type `ParseResults<GreatScriptArgs>` which gives the desired behaviour.

The `run` sub command has a few more potential errors than the `Print` command. The script can fail and it's sub commands can not have the correct arguments, `RunError` is a type that documents these possibilities and the run command will return a `Result<unit, RunError>`. 

This code can be made into it's own Run module:

```fsharp
module Run

open Argu
open Process

type RunError = 
    | ScriptFailed
    | GreatScriptArgumentMissing
    | UnexpectedRunArgument

type GreatScriptArgs =
    | Name of string
with
    interface IArgParserTemplate with
        member this.Usage =
            match this with
            | Name _ -> "name to print out."

type RunArgs =
    | [<CliPrefix(CliPrefix.None)>] Great_Script of ParseResults<GreatScriptArgs>
with
    interface IArgParserTemplate with
        member this.Usage =
            match this with
            | Great_Script _ -> "GreatScript.ps1 script"

let (|GreatScript|_|) (runArgs: ParseResults<RunArgs>) =
    match runArgs with
    | argz when argz.Contains(Great_Script) ->
        let greatScript = runArgs.GetResult(Great_Script)
        if greatScript.Contains(Name) then
            Some(Some greatScript)
        else
            Some(None)
    | _ -> None

let runGreatScript name =
    let arguments = sprintf " -name \"%s\" " name
    runPsScript "GreatScript.ps1" arguments None

let run (runArgs: ParseResults<RunArgs>) =
    match runArgs with
    | GreatScript greatScriptArgsOrNone -> 
        match greatScriptArgsOrNone with
        | Some greatScriptArgs ->
            let name = greatScriptArgs.GetResult(Name)
            match runGreatScript name with
            | Ok _ -> Ok ()
            | Error _ -> Error ScriptFailed
        | None -> 
            let greatScriptParser = ArgumentParser.Create<GreatScriptArgs>()
            printfn "%s" (greatScriptParser.PrintUsage())
            Error GreatScriptArgumentMissing
    | _ -> 
        let runArgsParser = ArgumentParser.Create<RunArgs>()
        printfn "%s" (runArgsParser.PrintUsage())
        Error UnexpectedRunArgument
```

Argu contains an attribute to specify mandatory arguments which would eliminate one of the `RunError` cases. There does seem to be a [bug](https://github.com/fsprojects/Argu/issues/116) which means that mandatory arguments on sub commands don't parse correctly. Fortunately it provides a nice use of partial active pattern matching with the `GreatScript` pattern that returns `Some` if the `ParseResults<RunArgs>` contains `Great_Script` arguments and will return a `Some<GreatScriptArgs>` if the `name` argument is present.

If the arguments are valid then the `runGreatScript` function will call the `GreatScript.ps1` with the argument ` -name "<name>" `. If the script runs successfully then the command returns `Ok()` and if it fails then it will return `Error ScriptFailed`.

The addition of a `run` sub command changes the types in our `Program.fs` code. The `CliError` and `CmdArgs` types include new cases: 

```fsharp
type CliError =
    | ArgumentsNotSpecified
    | RunErr of RunError
    
type CmdArgs =
    | [<AltCommandLine("-p")>] Print of message:string
    | [<CliPrefix(CliPrefix.None)>] Run of ParseResults<Run.RunArgs>
with
    interface IArgParserTemplate with
        member this.Usage =
            match this with
            | Print _ -> "Print a message"
            | Run _ -> "Run a script"
``` 

The run argument is passed into a function called `runRun` that returns `Ok()` or `RunError` mapped to a `CliError.RunErr`. The `getExitCode` function now includes information on the new error states and gives a nice descriptive display of the potential errors in the application:

```fsharp
let runRun runArgs =
    match Run.run (runArgs) with
    | Ok () -> Ok ()
    | Error err -> Error (RunErr err)

let getExitCode result =
    match result with
    | Ok () -> 0
    | Error err ->
        match err with
        | ArgumentsNotSpecified -> 1
        | RunErr runErr ->
            match runErr with
            | ScriptFailed -> 2
            | GreatScriptArgumentMissing -> 3
            | UnexpectedRunArgument -> 4
```

The cli now works as expected and gives a good level of discovery for the script and it's arguments.

![CliRun](/images/fsharp-tool/CliRun.jpg)

### C#ncerns

The `initech` cli will hopefully be used by the whole of Initech Ltd. A concern in writing a cli in F# might be that it's inconvenient for members of the team who don't want to learn the language to maintain or extend it. 

Also, although most of what can be done in C# can be done in F#, there might be some code which _just needs_ to be written in C# because it has features that F# does not, such as the harmless `goto` statement. 

Luckily C# code projects can easily be consumed by F# projects by including them as a class library. We can create a new C# library and add it to the project with:

```powershell
dotnet new classlib -n "Initech.Cli.CSharp" -o "Initech.Cli.CSharp" 
dotnet sln "Initech.Cli.sln" add "Initech.Cli.CSharp/Initech.Cli.CSharp.csproj"
dotnet add "Initech.Cli/Initech.Cli.fsproj" reference "Initech.Cli.CSharp/Initech.Cli.CSharp.csproj"
```

We can change the `Class1.cs` file to one called `GoThere.cs`, which prints out a message to the console:

```csharp
using System;

namespace Initech.Cli.CSharp
{
    public class GoThere
    {
        public static void Run()
        {
            goto Place;

            Console.WriteLine("Don't print this.");

            Place:

            Console.WriteLine("Yeah, I went there...");
        }
    }
}
```

This static method can easily be called from our F# code with:

```fsharp
open Initech.Cli.CSharp

let runGoThere () =
    GoThere.Run()
    Ok ()
```

Adding a `Go_There` argument to the `CmdArgs` type and updating the parsing logic allows us to call the C# code:

![CliGoThere](/images/fsharp-tool/CliGoThere.jpg)

The final `Program.fs` becomes:

```fsharp
open System
open Argu
open Initech.Cli.CSharp
open Run

type CliError =
    | ArgumentsNotSpecified
    | RunErr of RunError

type CmdArgs =
    | [<AltCommandLine("-p")>] Print of message:string
    | [<CliPrefix(CliPrefix.None)>] Run of ParseResults<Run.RunArgs>
    | [<CliPrefix(CliPrefix.None)>] Go_There
with
    interface IArgParserTemplate with
        member this.Usage =
            match this with
            | Print _ -> "Print a message"
            | Run _ -> "Run a script"
            | Go_There _ -> "Run a C# function"

let getExitCode result =
    match result with
    | Ok () -> 0
    | Error err ->
        match err with
        | ArgumentsNotSpecified -> 1
        | RunErr runErr ->
            match runErr with
            | ScriptFailed -> 2
            | GreatScriptArgumentMissing -> 3
            | UnexpectedRunArgument -> 4

let runPrint print = 
    printfn "%s" print
    Ok ()

let runRun runArgs =
    match Run.run (runArgs) with
    | Ok () -> Ok ()
    | Error err -> Error (RunErr err)

let runGoThere () =
    GoThere.Run()
    Ok ()

[<EntryPoint>]
let main argv = 
    let errorHandler = ProcessExiter(colorizer = function ErrorCode.HelpText -> None | _ -> Some ConsoleColor.Red)
    let parser = ArgumentParser.Create<CmdArgs>(programName = "initech", errorHandler = errorHandler)
    
    match parser.ParseCommandLine argv with
    | p when p.Contains(Print) -> runPrint (p.GetResult(Print))
    | p when p.Contains(Run) -> runRun (p.GetResult(Run))
    | p when p.Contains(Go_There) -> runGoThere()
    | _ ->
        printfn "%s" (parser.PrintUsage())
        Error ArgumentsNotSpecified
    |> getExitCode
```

### Conclusion

Argu makes it easy to create a complex command-line interface from an F# project. `dotnet` global tools make it easy to distribute, install and update clis from these projects. Hopefully this article has helped or inspired, thanks for reading until the end.