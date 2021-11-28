---
layout: post
title: Interactive code notebook with FSCS and SAFE stack
exc_erpt: Interactive code notebook with FSCS and SAFE stack
issue: 35
tags:
- dotnet
- fsharp
- fable
- safe-stack
- fscs
slug: "try-fscs"
date: "2021-12-15"
category: Tech
---

> This is an entry for the [F# Advent Calendar 2021](https://sergeytihon.com/tag/fsadvent), please consider checking out some of the other awesome blog posts.

Interactive code notebooks are an easy way to start learning a programming language. They speed up the process because code executes in a web browser, removing requirements to install any software onto your computer.

FSharp Compiler Services (FSCS) is a `dotnet` class library that contains the logic for F# compilation. Using the library with the dotnet runtime allows runtime execution of code with F# interactive via the `dotnet fsi` command.

SAFE stack is a loose combination of technologies and `dotnet new` template that allow web applications to be written in F# and run on the server and browser. Server side code runs with the dotnet runtime and client side code is [transpiled into Javascript with fable](https://fable.io/). This post isn't going to be an in-depth look into the stack as that has been done in other posts and there is [fantastic documentation](https://safe-stack.github.io/). TODO

Using a combination of FSCS and the safe stack we can easily create a code notebook.

---

## New project

Creating the notebook application involves installing the SAFE stack [project template and creating a new project](https://safe-stack.github.io/docs/quickstart/). This creates the files needed to build the Client and Server components with the application code files stored in the `src` directory.

![FableTree](FableTree.png)

The template creates three F# projects for the Shared, Server and Client code with the latter two depending on the `Shared.fsproj`. The project is setup to build the server code with `dotnet`, transpile the F# to Javascript with fable and bundle the client side code with webpack.

![ProjectStructure](TryFscs.drawio.png)

### Shared code

The shared code project is a dependency of both the client and server projects and is normally used for data transfer objects and validation code.
The template uses the `Fable.Remoting` [RPC library](https://zaid-ajaj.github.io/Fable.Remoting/) that makes the communication extremely simple.

The notebook is going to send an expression in the form of a string and either return the result of the expression if the code is ok, or return the compiler errors if the code does not compile. The `Shared.fs` file shows the required code to achieve this in an `eval` procedure:

``` fsharp
namespace Shared

module Route =
    let builder typeName methodName = sprintf "/api/%s/%s" typeName methodName

// type aliases for clarity/documentation
type Expression = string
type EvalValue = string
type EvalError = string
type EvalResult = Result<EvalValue, EvalError>

// used by Fable.Remoting to define communication types
type INotebookApi =
    {
        eval: Expression -> Async<EvalResult>
    }
```

### Client

The browser app is written in F# that is transpiled into Javascript.
The SAFE stack template implements a simple application written in a MVU style using the [Elmish library](https://elmish.github.io/elmish/) which can be tweaked to make the code notebook. 

MVU stands for Model View Update, the model contains all of the possible states of the application as a data structure. The view is a function that takes the model as an argument and returns the UI to be rendered to the user who can then perform actions that dispatch messages. Update is a function that takes messages from the UI and returns an updated model to be rendered.

![mvu pattern](mvu.png)

The notebook needs to store the state of the expression to be evaluated and the response from the api. The app responds to three different events: changing the expression textarea, run the expression and update the model from the response of the api.


``` fsharp
open Shared

type Model =
    { Expression: string
      Response: EvalResult }

type Msg =
    // Run button is pressed
    | EvaluateExpression
    // Expression text is changed
    | UpdateExpression of Expression
    // Received a response from api
    | GotResponse of EvalResult
```

The `Model` and `Msg` are used by the view and update functions and specify the possible application states and events. The update function takes the `Msg` and current `Model` and returns a tuple of the new `Model` and a command object to run.

``` fsharp
open Fable.Remoting.Client

// use Fable.Remoting and Shared.fs code to create object to call api
let notebookApi =
    Remoting.createApi ()
    |> Remoting.withRouteBuilder Route.builder
    |> Remoting.buildProxy<INotebookApi>

let update (msg: Msg) (model: Model) : Model * Cmd<Msg> =
    match msg with
    | EvaluateExpression ->
        // create command that sends expression to api and calls back to GotResponse
        let evaluateExpressionOnServer =
            Cmd.OfAsync.perform notebookApi.eval model.Expression GotResponse
        
        model, evaluateExpressionOnServer
    | GotResponse res ->
        // update the model with api response
        { model with Response = res }, Cmd.none
    | UpdateExpression expression ->
        // text area changed, update the model with new value
        { model with Expression = expression }, Cmd.none
```

A useful consequence of the `Msg` type is that pattern matching on the `msg` value will leveerage the compiler to ensure that all of the events are handled.


