# Local Testing Guide - Habit Tracker App

This guide will help you test the entire flow of the Habit Tracker app on your laptop before pushing to GitHub.

## Prerequisites

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Expo CLI** (will install globally)
- **Android Device** or **Android Emulator** (for testing on mobile)
- **Expo Go app** (from Play Store - for quick testing)

## Step 1: Install Expo CLI

Open PowerShell (Windows) and run:

```powershell
npm install -g expo-cli
npm install -g eas-cli
```

Verify installation:
```powershell
expo --version
eas --version
```

## Step 2: Install Project Dependencies

Navigate to your project folder:

```powershell
cd "c:\Files\acer\Personal Projects\habit_tracker_app\code (1)"
npm install
```

This installs all required packages including:
- React Native
- AsyncStorage
- React Native SVG
- All other dependencies

## Step 3: Test Options

### Option A: Quick Testing with Expo Go (Recommended for Initial Testing)

This is the **fastest way** to test without building an APK.

#### On your laptop:
```powershell
cd "c:\Files\acer\Personal Projects\habit_tracker_app\code (1)"
npm start
```

You should see:
```
Expo Go QR code
────────────────────────────────────────
Restart server? [y/N/a]
────────────────────────────────────────
```

#### On your Android phone:
1. Install **"Expo Go"** app from Google Play Store
2. Open Expo Go app
3. **Scan the QR code** shown in the terminal using Expo Go
4. App loads in seconds!

**Advantages:**
- ✅ Instant testing
- ✅ Hot reload (changes reflect immediately)
- ✅ No APK build needed
- ✅ Perfect for rapid iteration

**Disadvantages:**
- ❌ Requires Expo Go app on phone
- ❌ Performance may differ from standalone APK

---

### Option B: Web Testing (No Phone Required)

Test the web version directly in your browser:

```powershell
npm run web
```

This opens http://localhost:19006/ automatically. You can test:
- ✅ Onboarding flow
- ✅ Form validation
- ✅ Navigation between screens
- ✅ Button enable/disable logic
- ✅ AsyncStorage persistence (emulated in browser)

**Note:** The UI will be responsive but not mobile-native. Use this for quick logic testing.

---

### Option C: Android Emulator Testing

#### Prerequisites:
- Install Android Studio
- Setup Android Emulator (via Android Studio)

#### Steps:
```powershell
# Start Expo with Android flag
npm run android
```

**Advantages:**
- ✅ Tests on emulated Android device
- ✅ Looks exactly like real phone
- ✅ Can test all features

**Disadvantages:**
- ❌ Slower than Expo Go
- ❌ Requires Android Studio setup
- ❌ Consumes more resources

---

### Option D: Build APK for Testing (Most Realistic)

This creates a standalone APK without Expo Go dependency.

#### Prerequisites:
1. Create Expo account at https://expo.dev
2. Login via CLI:
```powershell
eas login
```

#### Build preview APK (Faster):
```powershell
npm run build:preview
```

Expected time: 5-10 minutes

#### After build completes:
1. Download the APK from the link provided
2. Transfer to your Android phone
3. Install and test

---

## Step 4: Test the Complete User Flow

### Onboarding Flow ✓
- [ ] App opens to Onboarding screen
- [ ] Name field accepts text
- [ ] Age dropdown shows values 15-80
- [ ] Can select an age
- [ ] Email field accepts valid email
- [ ] Continue button validates all fields
- [ ] Shows error if fields are empty
- [ ] Shows error for invalid email format

### Habit Category Selection ✓
- [ ] After onboarding, lands on Category screen
- [ ] Make Habit tab is active by default
- [ ] Break Habit tab can be clicked
- [ ] All 5 Make Habits display with icons
- [ ] All 5 Break Habits display when tab switched
- [ ] "Create your own" option visible in both tabs
- [ ] Can click any habit to select it (blue highlight)
- [ ] "Let's Build →" button is DISABLED initially
- [ ] "Let's Build →" button ENABLES when habit selected

### Make Habit Selection ✓
- [ ] See 5 pre-defined habits:
  - Walk 2km a day
  - Drink 3L water daily
  - Read 20 Min a day
  - 30 min Basic Workout
  - Plan the next day
- [ ] Can select each habit
- [ ] Button enables on selection

### Break Habit Selection ✓
- [ ] Switch to Break Habit tab
- [ ] See 5 bad habits:
  - Limit Excessive Gaming
  - Eating junk food
  - Scrolling reels for long periods
  - Smoking cigarettes
  - Negative self talk
- [ ] Can select each habit
- [ ] Button enables on selection

### Custom Habit Creation ✓
- [ ] Click "Create your own" in Make Habit
- [ ] Navigate to Custom Habit screen
- [ ] Heading says: "What are you really good at? but not consistent with it..."
- [ ] Text input field is visible
- [ ] Can type description
- [ ] Character counter shows (e.g., "45/200")
- [ ] "Let's Build →" button is DISABLED while empty
- [ ] "Let's Build →" button ENABLES when text entered
- [ ] Can go back to category selection

### Custom Break Habit ✓
- [ ] Click "Create your own" in Break Habit
- [ ] Heading changes to: "What are the bad habits which you are trying to break?"
- [ ] Same functionality as above

### Data Persistence ✓
- [ ] After creating habit, app navigates to Habit Tracker
- [ ] Can see habit in grid
- [ ] Close and restart app
- [ ] User data and habits are still there (AsyncStorage)

### Habit Tracker Grid ✓
- [ ] Grid displays 31x31 dots
- [ ] Can click dots to mark habits
- [ ] Line connects marked dots
- [ ] "Let's Go" and "Habit Missed" buttons work

---

## Step 5: Debugging Tips

### Check console errors:
```powershell
# Terminal will show errors/warnings
# Look for red error messages or yellow warnings
```

### Clear cache and restart:
```powershell
# Press 'c' in terminal while app is running
npm start -- --clear
```

### Reset project:
```powershell
rm -r node_modules
rm package-lock.json
npm install
npm start
```

### Check specific device logs:
```powershell
# For Android
adb logcat | grep -i "habit"
```

---

## Step 6: Testing Checklist Summary

| Feature | Status | Notes |
|---------|--------|-------|
| Onboarding Form | [ ] | Name, Age (15-80), Email |
| Form Validation | [ ] | Required fields, email format |
| Category Selection | [ ] | Tabs work, habits display |
| Make Habit Display | [ ] | 5 habits + create your own |
| Break Habit Display | [ ] | 5 habits + create your own |
| Selection Logic | [ ] | Button disable/enable works |
| Custom Habit | [ ] | Heading & input work |
| Data Persistence | [ ] | Survives app restart |
| Navigation | [ ] | All screen transitions smooth |
| Habit Grid | [ ] | Can mark habits, line draws |
| AsyncStorage | [ ] | Data saved locally |

---

## Step 7: Common Issues & Fixes

### Issue: "Metro Bundler failed to start"
**Fix:**
```powershell
npm start -- --clear
```

### Issue: "Cannot find module react-native"
**Fix:**
```powershell
npm install
```

### Issue: App crashes on startup
**Fix:**
1. Clear cache: `npm start -- --clear`
2. Restart terminal
3. Kill Expo Go and restart
4. Reinstall app

### Issue: Expo Go doesn't load QR code
**Fix:**
1. Make sure phone and laptop are on **same WiFi network**
2. Or use USB cable with Expo CLI
3. Or test web version first

### Issue: "Picker component not rendering"
**Fix:**
This is normal on web. Picker works fine on mobile.

---

## Step 8: Next Steps - GitHub Push

Once all tests pass:

1. Make sure all files are created:
   - ✅ App.tsx (updated)
   - ✅ components/OnboardingScreen.tsx (created)
   - ✅ components/HabitCategoryScreen.tsx (created)
   - ✅ components/CustomHabitScreen.tsx (created)

2. Verify no console errors

3. Check git status:
   ```powershell
   git status
   ```

4. Add files:
   ```powershell
   git add .
   ```

5. Commit:
   ```powershell
   git commit -m "feat: add complete onboarding and habit selection flow"
   ```

6. Push:
   ```powershell
   git push origin main
   ```

---

## Quick Start Commands (Copy-Paste Ready)

### First time setup:
```powershell
npm install -g expo-cli
npm install -g eas-cli
cd "c:\Files\acer\Personal Projects\habit_tracker_app\code (1)"
npm install
```

### Quick test with Expo Go:
```powershell
npm start
# Scan QR code with Expo Go on your phone
```

### Web testing:
```powershell
npm run web
# Opens http://localhost:19006 in browser
```

### Android Emulator:
```powershell
npm run android
```

### Build APK:
```powershell
eas login
npm run build:preview
```

---

## Need Help?

- **Expo Docs:** https://docs.expo.dev
- **React Native Docs:** https://reactnative.dev
- **AsyncStorage Docs:** https://react-native-async-storage.github.io/async-storage/
- **Picker Component:** https://reactnative.dev/docs/picker

---

## Testing Environment Checklist

- [ ] Node.js v14+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Expo CLI installed (`expo --version`)
- [ ] Project dependencies installed (`npm install` completed)
- [ ] Android phone or emulator available
- [ ] Expo Go app installed (if using Option A)
- [ ] Same WiFi network (for Expo Go testing)

Good luck with testing! 🚀
