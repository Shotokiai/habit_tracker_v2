@echo off
REM Quick Start Script for Habit Tracker App - Windows

echo.
echo ========================================
echo Habit Tracker - Quick Start
echo ========================================
echo.

REM Check if Node.js is installed
echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
echo ✓ Node.js is installed

REM Check if npm is installed
echo Checking npm installation...
npm --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: npm is not installed!
    echo Please reinstall Node.js
    pause
    exit /b 1
)
echo ✓ npm is installed

REM Check if Expo CLI is installed
echo Checking Expo CLI...
expo --version >nul 2>&1
if errorlevel 1 (
    echo Installing Expo CLI globally...
    call npm install -g expo-cli
    echo ✓ Expo CLI installed
) else (
    echo ✓ Expo CLI is already installed
)

REM Check if EAS CLI is installed
echo Checking EAS CLI...
eas --version >nul 2>&1
if errorlevel 1 (
    echo Installing EAS CLI globally...
    call npm install -g eas-cli
    echo ✓ EAS CLI installed
) else (
    echo ✓ EAS CLI is already installed
)

echo.
echo Checking project dependencies...
if not exist "node_modules" (
    echo Installing npm packages...
    call npm install
    echo ✓ Dependencies installed
) else (
    echo ✓ Dependencies already installed
)

echo.
echo ========================================
echo Select Testing Option:
echo ========================================
echo 1 - Start Expo (scan QR with Expo Go app)
echo 2 - Start Web Version (http://localhost:19006)
echo 3 - Start Android Emulator
echo 4 - Build APK (requires Expo account)
echo 5 - Install dependencies only
echo 6 - Clear cache and restart
echo 0 - Exit
echo.

set /p choice="Enter your choice (0-6): "

if "%choice%"=="1" (
    echo.
    echo Starting Expo Go...
    echo Make sure your phone is on the same WiFi network!
    echo Scan the QR code with "Expo Go" app on your phone.
    echo.
    call npm start
) else if "%choice%"=="2" (
    echo.
    echo Starting Web version...
    echo Browser will open automatically at http://localhost:19006
    echo.
    call npm run web
) else if "%choice%"=="3" (
    echo.
    echo Starting Android Emulator...
    echo Make sure Android Emulator is running!
    echo.
    call npm run android
) else if "%choice%"=="4" (
    echo.
    echo Building APK...
    echo This requires an Expo account at https://expo.dev
    echo You will be prompted to login.
    echo Build time: 5-10 minutes
    echo.
    call eas login
    call npm run build:preview
) else if "%choice%"=="5" (
    echo.
    echo Installing/Updating dependencies...
    call npm install
    echo ✓ Done!
) else if "%choice%"=="6" (
    echo.
    echo Clearing cache...
    rmdir /s /q node_modules
    del package-lock.json
    echo Installing fresh dependencies...
    call npm install
    echo ✓ Cache cleared! Ready to start fresh.
) else if "%choice%"=="0" (
    echo Exiting...
    exit /b 0
) else (
    echo Invalid choice! Please run the script again.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Testing Tips:
echo ========================================
echo - Press 'r' to reload app
echo - Press 'c' to clear cache
echo - Press 'q' to exit
echo ========================================
echo.

pause
