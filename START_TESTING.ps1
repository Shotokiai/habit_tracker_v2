# Quick Start Script for Habit Tracker App - Windows PowerShell

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Habit Tracker - Quick Start" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
$nodeCheck = node --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please download and install from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host "✓ Node.js is installed ($nodeCheck)" -ForegroundColor Green

# Check if npm is installed
Write-Host "Checking npm installation..." -ForegroundColor Yellow
$npmCheck = npm --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: npm is not installed!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host "✓ npm is installed ($npmCheck)" -ForegroundColor Green

# Check if Expo CLI is installed
Write-Host "Checking Expo CLI..." -ForegroundColor Yellow
$expoCheck = expo --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Installing Expo CLI globally..." -ForegroundColor Yellow
    npm install -g expo-cli
    Write-Host "✓ Expo CLI installed" -ForegroundColor Green
} else {
    Write-Host "✓ Expo CLI is already installed ($expoCheck)" -ForegroundColor Green
}

# Check if EAS CLI is installed
Write-Host "Checking EAS CLI..." -ForegroundColor Yellow
$easCheck = eas --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Installing EAS CLI globally..." -ForegroundColor Yellow
    npm install -g eas-cli
    Write-Host "✓ EAS CLI installed" -ForegroundColor Green
} else {
    Write-Host "✓ EAS CLI is already installed ($easCheck)" -ForegroundColor Green
}

Write-Host ""
Write-Host "Checking project dependencies..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing npm packages..." -ForegroundColor Yellow
    npm install
    Write-Host "✓ Dependencies installed" -ForegroundColor Green
} else {
    Write-Host "✓ Dependencies already installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Select Testing Option:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "1 - Start Expo (scan QR with Expo Go app)" -ForegroundColor White
Write-Host "2 - Start Web Version (http://localhost:19006)" -ForegroundColor White
Write-Host "3 - Start Android Emulator" -ForegroundColor White
Write-Host "4 - Build APK (requires Expo account)" -ForegroundColor White
Write-Host "5 - Install dependencies only" -ForegroundColor White
Write-Host "6 - Clear cache and restart" -ForegroundColor White
Write-Host "0 - Exit" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (0-6)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "Starting Expo Go..." -ForegroundColor Cyan
        Write-Host "Make sure your phone is on the same WiFi network!" -ForegroundColor Yellow
        Write-Host "Scan the QR code with 'Expo Go' app on your phone." -ForegroundColor Yellow
        Write-Host ""
        npm start
    }
    "2" {
        Write-Host ""
        Write-Host "Starting Web version..." -ForegroundColor Cyan
        Write-Host "Browser will open automatically at http://localhost:19006" -ForegroundColor Yellow
        Write-Host ""
        npm run web
    }
    "3" {
        Write-Host ""
        Write-Host "Starting Android Emulator..." -ForegroundColor Cyan
        Write-Host "Make sure Android Emulator is running!" -ForegroundColor Yellow
        Write-Host ""
        npm run android
    }
    "4" {
        Write-Host ""
        Write-Host "Building APK..." -ForegroundColor Cyan
        Write-Host "This requires an Expo account at https://expo.dev" -ForegroundColor Yellow
        Write-Host "You will be prompted to login." -ForegroundColor Yellow
        Write-Host "Build time: 5-10 minutes" -ForegroundColor Yellow
        Write-Host ""
        eas login
        npm run build:preview
    }
    "5" {
        Write-Host ""
        Write-Host "Installing/Updating dependencies..." -ForegroundColor Cyan
        npm install
        Write-Host "✓ Done!" -ForegroundColor Green
    }
    "6" {
        Write-Host ""
        Write-Host "Clearing cache..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
        Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
        Write-Host "Installing fresh dependencies..." -ForegroundColor Yellow
        npm install
        Write-Host "✓ Cache cleared! Ready to start fresh." -ForegroundColor Green
    }
    "0" {
        Write-Host "Exiting..." -ForegroundColor Yellow
        exit 0
    }
    default {
        Write-Host "Invalid choice! Please run the script again." -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Testing Tips:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "- Press 'r' to reload app" -ForegroundColor White
Write-Host "- Press 'c' to clear cache" -ForegroundColor White
Write-Host "- Press 'q' to exit" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Read-Host "Press Enter to exit"
