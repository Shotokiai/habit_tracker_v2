# Quick Reference - Testing Commands

## One-Line Quick Start

```powershell
cd "c:\Files\acer\Personal Projects\habit_tracker_app\code (1)" ; npm install ; npm start
```

## Testing Methods Comparison

| Method | Setup Time | Test Time | Real Phone | Best For |
|--------|-----------|-----------|-----------|----------|
| **Expo Go** | 1 min | Instant | Yes | Quick testing, iteration |
| **Web** | 1 min | Instant | No | Logic, no phone |
| **Emulator** | 10 min | 2-5 min | No | Full mobile testing |
| **APK Build** | 30 min | 5-10 min | Yes | Final verification |

---

## Option A: Expo Go (Recommended First Test)

### Setup (One time)
```powershell
npm install -g expo-cli
npm install
```

### Run
```powershell
npm start
```

### On Phone
1. Install "Expo Go" app from Google Play Store
2. Open Expo Go
3. Scan QR code from terminal
4. App loads in seconds ✓

### Advantages
- ✅ Instant
- ✅ Hot reload
- ✅ No build needed
- ✅ Perfect for development

---

## Option B: Web Testing (No Phone Needed)

### Run
```powershell
npm run web
```

Automatically opens http://localhost:19006

### What Works
- ✅ Onboarding form
- ✅ Form validation
- ✅ Tab switching
- ✅ Button logic
- ✅ Navigation
- ⚠️ Picker (dropdown) shows as web select
- ⚠️ Mobile styling may differ

### Best For
- Testing logic without phone
- Debugging forms
- Quick iterations

---

## Option C: Android Emulator

### Prerequisites
- Android Studio installed
- Emulator created and running

### Run
```powershell
npm run android
```

### Advantages
- ✅ Looks like real device
- ✅ Tests all features
- ✅ Mobile-accurate

### Disadvantages
- ❌ Slower startup
- ❌ High CPU usage
- ❌ Requires Android Studio

---

## Option D: Build APK (Most Realistic)

### Prerequisites
1. Create account at https://expo.dev
2. Verify email

### Setup (One time)
```powershell
npm install -g eas-cli
eas login
```

### Build
```powershell
npm run build:preview
```

### Time
- First build: 10-15 minutes
- Subsequent builds: 5-10 minutes

### After Build
1. Get download link from terminal
2. Download APK
3. Transfer to phone
4. Install

### Advantages
- ✅ Standalone app (no Expo Go needed)
- ✅ Real installation experience
- ✅ Final verification before GitHub

---

## Keyboard Shortcuts (While App Running)

| Key | Action |
|-----|--------|
| `r` | Reload app |
| `c` | Clear cache and restart |
| `q` | Quit Metro bundler |
| `w` | Toggle web preview |
| `a` | Toggle Android preview |
| `i` | Toggle iOS preview |

---

## Troubleshooting

### "Cannot find module react"
```powershell
npm install
npm start -- --clear
```

### "Port 8081 already in use"
```powershell
# Kill process on port 8081
# Windows:
taskkill /F /IM node.exe

# Then restart
npm start
```

### "QR Code won't scan on phone"
- Make sure phone is on **same WiFi** as laptop
- Try USB cable mode:
```powershell
adb devices  # Check if device connected
npm start -- --localhost
```

### "App crashes on startup"
```powershell
npm start -- --clear
```

### "Picker not showing on web"
- This is normal! Picker works on mobile
- Test form logic on mobile or emulator

---

## Testing Checklist (Quick)

Before pushing to GitHub:

- [ ] Onboarding form works (name, age, email)
- [ ] Form validation works
- [ ] Category screen loads
- [ ] Make Habit tab displays 5 habits
- [ ] Break Habit tab displays 5 habits
- [ ] Can select habits
- [ ] "Let's Build" button disables/enables
- [ ] Custom habit screen works
- [ ] Can create custom habits
- [ ] Data persists after restart
- [ ] No console errors
- [ ] No crashes

---

## File Structure for Testing

```
code (1)/
├── App.tsx                          ← Main app (UPDATED)
├── package.json                     ← Dependencies
├── LOCAL_TESTING_GUIDE.md           ← Detailed guide (NEW)
├── TESTING_CHECKLIST.md             ← Test scenarios (NEW)
├── START_TESTING.bat                ← Quick start script (NEW)
├── START_TESTING.ps1                ← PowerShell script (NEW)
├── components/
│   ├── OnboardingScreen.tsx         ← Onboarding (NEW)
│   ├── HabitCategoryScreen.tsx      ← Category tabs (NEW)
│   ├── CustomHabitScreen.tsx        ← Custom habit (NEW)
│   ├── HabitGrid.tsx                ← Existing grid
│   └── DotGrid.tsx                  ← Existing dots
└── ... (other files)
```

---

## Testing Timeline

```
Total Time: 15-30 minutes

┌─ Option A: Expo Go (Recommended)
│  1. Setup: 2 min (npm install)
│  2. Run: npm start
│  3. Test on phone: 10 min
│  4. Verify all features: 5 min
│  Total: 17 minutes
│
├─ Option B: Web Testing
│  1. Setup: 1 min
│  2. Run: npm run web
│  3. Test: 10 min
│  Total: 11 minutes
│
├─ Option C: Emulator
│  1. Start emulator: 5 min
│  2. Run: npm run android
│  3. Test: 10 min
│  Total: 15 minutes
│
└─ Option D: APK Build
   1. Build: 10 min
   2. Download: 1 min
   3. Install on phone: 2 min
   4. Test: 10 min
   Total: 23 minutes
```

---

## Step-by-Step (Copy & Paste)

### First Time Setup
```powershell
# Open PowerShell in project folder
npm install -g expo-cli
npm install
```

### Quick Test (Expo Go)
```powershell
npm start
# Wait for QR code to appear
# Scan with Expo Go on your phone
# Test 10 scenarios from TESTING_CHECKLIST.md
# Press 'q' to quit
```

### Web Test
```powershell
npm run web
# Browser opens automatically
# Test form logic
# Press Ctrl+C to quit
```

### Full APK Build
```powershell
eas login  # One time
npm run build:preview
# Wait 5-10 minutes
# Download and install APK
```

---

## Common Questions

**Q: Do I need a phone to test?**
A: No! Test with web first. Use phone/emulator for final verification.

**Q: Which method is fastest?**
A: Expo Go + scan QR = Instant testing

**Q: Can I test without WiFi?**
A: Yes, use USB cable or local network mode

**Q: How do I reset the app state?**
A: Close Expo Go, clear app cache, rescan QR code

**Q: Will the APK build work without Expo account?**
A: No, APK build requires Expo account. Use Expo Go for development.

**Q: Can I push to GitHub without testing?**
A: Not recommended! Always test all features first.

---

## Ready to Push to GitHub?

```powershell
# Final checks
npm install      # Fresh install
npm start -- --clear  # Clear cache
# Test all scenarios from TESTING_CHECKLIST.md

# If all tests pass:
git status
git add .
git commit -m "feat: add complete onboarding and habit selection flow"
git push origin main
```

---

## Need Help?

```
Docs:
- Expo: https://docs.expo.dev
- React Native: https://reactnative.dev
- AsyncStorage: https://react-native-async-storage.github.io/

Commands:
- expo --help
- npm --help
- eas build --help
```

Good luck! 🚀
