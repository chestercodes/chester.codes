$executingDir = Split-Path -parent $PSCommandPath
$cburbidgeReposDir = (Get-Item $executingDir).Parent.FullName
$cvRepo = join-path $cburbidgeReposDir "CV"
$skillsRepo = join-path $cburbidgeReposDir "Skills"

function ExitIfNotExists ($d){
    if(-not(Test-Path $d)){
        Write-Error "Directory $d doesnt exist, cant continue"
        exit 1
    }
}

ExitIfNotExists $cvRepo
ExitIfNotExists $skillsRepo

cd $skillsRepo
grunt 
$skillsJs = [IO.File]::ReadAllText("$skillsRepo\Skills.js")
$skillsHtmlTemplate = [IO.File]::ReadAllText("$skillsRepo\skills-template.html")
$skillsHtmlTemplate = $skillsHtmlTemplate.Replace("{SkillsCode}", $skillsJs)
[IO.File]::WriteAllText("$executingDir\_includes\skills.html", $skillsHtmlTemplate)

cd $cvRepo
resume export cv.html
Copy-Item "$cvRepo\cv.html" "$executingDir\_includes\cv.html"