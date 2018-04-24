$executingDir = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition
$cvDir = resolve-path "$executingDir/../CV"

$componentDir = "$cvDir/react/src/components/CV"
if((test-path $componentDir) -eq $false){
    Write-Error "cant find component folder at $componentDir"
    exit 1
}

$destDir = "$executingDir/src/chestercodes"

cp $componentDir $destDir -Force -Recurse