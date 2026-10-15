# Stepora Theme - Automatic Live Sync Watcher
# Run this script in PowerShell while coding: .\watch_sync.ps1

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " Stepora Live Code Sync is RUNNING" -ForegroundColor Green
Write-Host " Watching style.css and script.js for changes..." -ForegroundColor Yellow
Write-Host " Any changes you save will INSTANTLY sync to Odoo!" -ForegroundColor Green
Write-Host " Press Ctrl + C to stop." -ForegroundColor Gray
Write-Host "==================================================" -ForegroundColor Cyan

$sourceCss = "c:\ODOO\style.css"
$targetCss = "c:\ODOO\custom_addons\theme_stepora\static\src\css\style.css"

$sourceJs = "c:\ODOO\script.js"
$targetJs = "c:\ODOO\custom_addons\theme_stepora\static\src\js\script.js"

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = "c:\ODOO"
$watcher.Filter = "*.*"
$watcher.IncludeSubdirectories = $false
$watcher.EnableRaisingEvents = $true

$action = {
    $path = $Event.SourceEventArgs.FullPath
    $name = $Event.SourceEventArgs.Name
    $changeType = $Event.SourceEventArgs.ChangeType
    
    if ($name -eq "style.css") {
        Start-Sleep -Milliseconds 100
        Copy-Item -Path $sourceCss -Destination $targetCss -Force
        $time = (Get-Date).ToString("HH:mm:ss")
        Write-Host "[$time] [SUCCESS] style.css updated and synced to Odoo theme!" -ForegroundColor Green
    }
    elseif ($name -eq "script.js") {
        Start-Sleep -Milliseconds 100
        Copy-Item -Path $sourceJs -Destination $targetJs -Force
        $time = (Get-Date).ToString("HH:mm:ss")
        Write-Host "[$time] [SUCCESS] script.js updated and synced to Odoo theme!" -ForegroundColor Cyan
    }
}

Register-ObjectEvent $watcher "Changed" -Action $action | Out-Null

try {
    while ($true) {
        Start-Sleep -Seconds 1
    }
}
finally {
    Unregister-Event -SourceIdentifier $watcher.ToString() -ErrorAction SilentlyContinue
    $watcher.Dispose()
    Write-Host "`nSync watcher stopped." -ForegroundColor Yellow
}
