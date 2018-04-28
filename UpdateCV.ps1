$executingDir = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition
$cvDir = resolve-path "$executingDir/../CV"

$componentDir = "$cvDir/component/umd/*"
$destDir = "$executingDir/src/chestercodes/CV"
cp $componentDir $destDir -Force -Recurse

$imagesDir = "$cvDir/component/public/logos/*"
$imagesDestDir = "$executingDir/static/logos"
cp $imagesDir $imagesDestDir -Force -Recurse