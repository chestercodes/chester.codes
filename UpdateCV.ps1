$executingDir = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition
$cvDir = resolve-path "$executingDir/../CV"

$componentDir = "$cvDir/component/umd/*"
if((test-path $componentDir) -eq $false){
    Write-Error "cant find component folder at $componentDir"
    exit 1
}

$destDir = "$executingDir/src/chestercodes/CV"

cp $componentDir $destDir -Force -Recurse