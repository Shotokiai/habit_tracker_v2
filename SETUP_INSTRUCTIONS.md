# Habit Tracker - React Native APK Build Guide

## Step 1: Install Required Tools

### On Mac/Linux:
\`\`\`bash
npm install -g eas-cli
npm install -g expo-cli
\`\`\`

### On Windows:
\`\`\`bash
npm install -g eas-cli
npm install -g expo-cli
\`\`\`

## Step 2: Extract and Setup the Project

1. **Extract the downloaded ZIP file**
   \`\`\`bash
   unzip habit-tracker.zip
   cd habit-tracker
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

## Step 3: Create Expo Account (Required for Building APK)

1. Go to https://expo.dev
2. Click "Sign Up"
3. Create an account with your email
4. Verify your email

## Step 4: Login to Expo CLI

\`\`\`bash
eas login
\`\`\`

Enter your Expo credentials when prompted.

## Step 5: Build the APK

### Option A: Build Preview APK (Faster, ~5-10 minutes)
\`\`\`bash
npm run build:preview
\`\`\`

This creates an APK that you can test on your device immediately.

### Option B: Build Production APK (For App Store submission)
\`\`\`bash
npm run build:android
\`\`\`

## Step 6: Download and Install the APK

1. After the build completes, you'll get a download link
2. Click the link to download the `.apk` file
3. Transfer the APK to your Android phone
4. Open the file manager on your phone and tap the APK file
5. Tap "Install" and allow permissions
6. Done! The app is now installed on your phone

## Troubleshooting

### Build Fails with "Java not found"
Install Java Development Kit (JDK):
- Download from https://www.oracle.com/java/technologies/downloads/
- Install JDK 11 or higher

### "eas-cli not found"
Try installing globally again:
\`\`\`bash
npm install -g eas-cli@latest
\`\`\`

### Build Takes Too Long
This is normal for the first build. Subsequent builds are faster.

### APK Installation Shows "App not installed"
- Make sure your phone allows installation from unknown sources
- Settings → Security → Unknown Sources (Enable)

## Local Testing (Optional)

Before building the APK, you can test locally:

\`\`\`bash
npm start
\`\`\`

This opens Expo Go. On your Android phone:
1. Install "Expo Go" from Play Store
2. Open Expo Go
3. Scan the QR code from the terminal
4. The app loads on your phone

## Building from Different Computers

If you build from a different computer:
\`\`\`bash
eas login
eas build --platform android --profile preview
\`\`\`

You'll be logged in and can continue building.

## Support

For more help, visit:
- Expo Docs: https://docs.expo.dev
- EAS Build: https://docs.expo.dev/build/introduction/
