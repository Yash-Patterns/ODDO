# Stepora Theme - Fast XML/Template Reload Script
# Run this whenever you edit pages.xml or add new Odoo views: .\update_odoo.ps1

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " Reloading Stepora Theme in Odoo Database..." -ForegroundColor Yellow
Write-Host "==================================================" -ForegroundColor Cyan

$pythonExe = "C:\Program Files\Odoo 17.0.20261009\python\python.exe"
$odooBin = "C:\Program Files\Odoo 17.0.20261009\server\odoo-bin"
$odooConf = "C:\Program Files\Odoo 17.0.20261009\server\odoo.conf"
$addonsPath = "C:\Program Files\Odoo 17.0.20261009\server\odoo\addons,c:\ODOO\custom_addons"

& $pythonExe $odooBin -c $odooConf --addons-path=$addonsPath -u theme_stepora -d stepora --http-port=8075 --stop-after-init

Write-Host "`n[SUCCESS] Stepora Theme reloaded! Refresh your browser (Ctrl + F5) at http://localhost:8069" -ForegroundColor Green
