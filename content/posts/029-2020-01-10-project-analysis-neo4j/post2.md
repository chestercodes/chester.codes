
### Project and library info

The project, library nodes and `REFERENCES` relationships can be derived from the code project files. These are xml files which contain information on the project references and the libraries used in the project. Project files take slightly different forms depending on whether they are `netframework` or `netcore` but they contain three types of nodes which are interesting. 

  Platform      |   Node name        |   Contains
  --------      |   ---------        |   --------
  netframework  |  ProjectReference  |  References between projects
  netframework  |  Reference         |  A nuget or framework library reference
  netcore       |  ProjectReference  |  References between projects
  netcore       |  PackageReference  |  A nuget or framework library reference
  
An example of the relevent nodes of a framework proj file `SomeProject.csproj` can be seen below:

``` xml
<?xml version="1.0" encoding="utf-8"?>
<Project xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <ItemGroup>
    <!-- Nuget library reference -->
    <Reference Include="Newtonsoft.Json, Version=12.0.0.0, Culture=neutral, PublicKeyToken=30ad4fe6b2a6aeed, processorArchitecture=MSIL">
      <HintPath>..\packages\Newtonsoft.Json.12.0.2\lib\net45\Newtonsoft.Json.dll</HintPath>
    </Reference>
    
    <!-- Framework library reference -->
    <Reference Include="System.Net.Http" />
  </ItemGroup>
  
  <ItemGroup>
    <!-- Project reference to other code project -->
    <ProjectReference Include="..\Other.Project\Other.Project.csproj">
      <Project>{560411b0-4899-48d8-9dd1-662874c17f73}</Project>
      <Name>Other.Project</Name>
    </ProjectReference>
  </ItemGroup>
</Project>
```

From this file we can derive the following nodes and relationships:
