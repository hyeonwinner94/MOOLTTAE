$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME

Push-Location $root
try {
  cmd /c npm run build:web
  cmd /c npx cap sync android
  Push-Location "$root\android"
  try {
    .\gradlew.bat assembleDebug
  } finally {
    Pop-Location
  }
  New-Item -ItemType Directory -Force "$root\release" | Out-Null
  Copy-Item "$root\android\app\build\outputs\apk\debug\app-debug.apk" "$root\release\moolttae-debug.apk" -Force
  $webBundle = "$root\release\moolttae-web.zip"
  Remove-Item $webBundle -Force -ErrorAction SilentlyContinue
  Add-Type -AssemblyName System.IO.Compression
  Add-Type -AssemblyName System.IO.Compression.FileSystem
  $archive = [System.IO.Compression.ZipFile]::Open($webBundle, [System.IO.Compression.ZipArchiveMode]::Create)
  try {
    Get-ChildItem "$root\dist" -Recurse -File | ForEach-Object {
      $relativePath = $_.FullName.Substring("$root\dist".Length + 1).Replace("\", "/")
      [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
        $archive,
        $_.FullName,
        $relativePath,
        [System.IO.Compression.CompressionLevel]::Optimal
      ) | Out-Null
    }
  } finally {
    $archive.Dispose()
  }
  Write-Host "APK: $root\release\moolttae-debug.apk"
  Write-Host "Web bundle: $root\release\moolttae-web.zip"
} finally {
  Pop-Location
}
