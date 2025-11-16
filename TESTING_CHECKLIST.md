# Testing Flow & Validation Checklist

## Complete User Journey Flow

```
START
  ↓
┌─────────────────────────────────────┐
│  ONBOARDING SCREEN                  │
│  - Enter Name                        │
│  - Select Age (15-80)                │
│  - Enter Email                       │
│  - Click "Continue"                  │
└─────────────────────────────────────┘
  ↓ [Data saved to AsyncStorage]
┌─────────────────────────────────────┐
│  HABIT CATEGORY SCREEN              │
│  - Two tabs: Make | Break           │
│  - Shows 5 habits per tab            │
│  - "Create your own" option          │
│  - "Let's Build" button (disabled)   │
└─────────────────────────────────────┘
  ↓
  ├─→ [User selects predefined habit]
  │     ↓
  │   ┌────────────────────────────┐
  │   │ HABIT TRACKER SCREEN       │
  │   │ - Habit grid (31x31)       │
  │   │ - Add more habits          │
  │   └────────────────────────────┘
  │
  └─→ [User clicks "Create your own"]
        ↓
      ┌──────────────────────────────┐
      │  CUSTOM HABIT SCREEN         │
      │  - Dynamic heading based on  │
      │    habit type (Make/Break)   │
      │  - Text input (max 200 chars)│
      │  - Character counter        │
      │  - "Let's Build" (disabled)  │
      └──────────────────────────────┘
        ↓ [User enters text & clicks button]
      ┌──────────────────────────────┐
      │ HABIT TRACKER SCREEN         │
      │ - Custom habit created       │
      │ - Ready to track             │
      └──────────────────────────────┘
```

---

## Test Scenarios

### Scenario 1: Complete Onboarding
**Goal:** Verify onboarding captures all user data

```
STEPS:
1. Launch app (fresh install or cleared AsyncStorage)
2. Enter name: "John Doe"
3. Select age: "28"
4. Enter email: "john@example.com"
5. Click "Continue"

EXPECTED RESULTS:
✓ All fields accept input without crashing
✓ Age dropdown shows all values 15-80
✓ Email validation works (reject invalid emails)
✓ Required field validation works
✓ After continue, proceed to Category screen
✓ User data saved (can close and reopen app)

VALIDATION FAILURES:
✗ Form accepts invalid email
✗ Continue allowed with empty fields
✗ Age dropdown missing values
✗ User data not saved after restart
```

---

### Scenario 2: Make Habit Selection
**Goal:** Verify Make Habit tab displays and selection works

```
STEPS:
1. Complete onboarding
2. Verify "Make Habit" tab is active
3. Verify 5 habits visible:
   - Walk 2km a day
   - Drink 3L water daily
   - Read 20 Min a day
   - 30 min Basic Workout
   - Plan the next day
4. Click "Create your own"
5. Click habit to select it
6. Verify "Let's Build" button enables
7. Click "Let's Build"

EXPECTED RESULTS:
✓ All 5 habits display with icons
✓ "Create your own" option visible
✓ Clicking habit highlights it
✓ Button disabled until selection
✓ Button enabled after selection
✓ Proceed to Habit Tracker
✓ Habit is created and visible

VALIDATION FAILURES:
✗ Habits not displaying
✗ Create your own not visible
✗ Button always enabled/disabled
✗ Habit not created
✗ Wrong habit selected
```

---

### Scenario 3: Break Habit Selection
**Goal:** Verify Break Habit tab works independently

```
STEPS:
1. Complete onboarding
2. Click "Break Habit" tab
3. Verify tab switches and shows:
   - Limit Excessive Gaming
   - Eating junk food
   - Scrolling reels for long periods
   - Smoking cigarettes
   - Negative self talk
4. Click "Create your own"
5. Select a habit
6. Click "Let's Build"

EXPECTED RESULTS:
✓ Tab switches without issues
✓ All 5 break habits display
✓ Different from Make Habit list
✓ Selection logic works
✓ Creates Break habit type
✓ Proceeds to Habit Tracker

VALIDATION FAILURES:
✗ Tab doesn't switch
✗ Wrong habits displayed
✗ Same habits as Make Habit
✗ Selection doesn't work
✗ Creates wrong habit type
```

---

### Scenario 4: Custom Habit - Make Type
**Goal:** Verify custom habit creation for Make Habit

```
STEPS:
1. On Habit Category screen
2. Click "Make Habit" tab (should be default)
3. Click "Create your own"
4. Verify heading: "What are you really good at? but not consistent with it..."
5. Verify text input is empty
6. Verify "Let's Build" button is DISABLED
7. Type: "Practice Guitar for 1 hour"
8. Verify character counter updates
9. Verify "Let's Build" button is now ENABLED
10. Click "Let's Build"

EXPECTED RESULTS:
✓ Heading displays correctly
✓ Input field accepts text
✓ Counter updates (e.g., "28/200")
✓ Button disabled when empty
✓ Button enabled when text entered
✓ Habit created successfully
✓ Shows in Habit Tracker
✓ Correct habit type saved

VALIDATION FAILURES:
✗ Wrong heading displayed
✗ Counter doesn't update
✗ Button behavior reversed
✗ Habit not created
✗ Habit not visible in tracker
```

---

### Scenario 5: Custom Habit - Break Type
**Goal:** Verify custom habit creation for Break Habit

```
STEPS:
1. On Habit Category screen
2. Click "Break Habit" tab
3. Click "Create your own"
4. Verify heading: "What are the bad habits which you are trying to break?"
5. Leave empty
6. Verify "Let's Build" DISABLED
7. Type: "Stop excessive phone scrolling"
8. Verify "Let's Build" ENABLED
9. Click "Let's Build"

EXPECTED RESULTS:
✓ Correct heading for Break type
✓ Button disable/enable works
✓ Habit created as Break type
✓ Shows in Habit Tracker
✓ Different from Make habits

VALIDATION FAILURES:
✗ Wrong heading shown
✗ Same heading as Make Habit
✗ Button logic broken
✗ Wrong habit type created
```

---

### Scenario 6: Data Persistence
**Goal:** Verify AsyncStorage saves data correctly

```
STEPS:
1. Complete onboarding with:
   Name: "Alice"
   Age: "25"
   Email: "alice@test.com"
2. Create a habit: "Morning Run"
3. Close app completely
4. Reopen app
5. Verify landing on Habit Tracker (not onboarding)
6. Verify habit "Morning Run" is still there
7. Create another habit
8. Kill app process (not just close)
9. Reopen app
10. Verify both habits exist

EXPECTED RESULTS:
✓ User data persists across restarts
✓ Habits persist across restarts
✓ No need to re-enter onboarding
✓ App state fully restored
✓ Data survives app crash
✓ Data survives device restart

VALIDATION FAILURES:
✗ Back to onboarding after restart
✗ Habits disappeared
✗ User data not saved
✗ Only partial data saved
```

---

### Scenario 7: Error Handling
**Goal:** Verify error messages and validations

```
STEPS - Empty Fields:
1. On Onboarding
2. Leave all fields empty
3. Click "Continue"

EXPECTED: Error alert "Please fill in all fields"

STEPS - Invalid Email:
1. On Onboarding
2. Enter name: "Test"
3. Select age: "30"
4. Enter email: "notanemail"
5. Click "Continue"

EXPECTED: Error alert "Please enter a valid email address"

STEPS - Custom Habit Empty:
1. On Custom Habit screen
2. Click "Let's Build" with empty input

EXPECTED: Error alert "Please describe your habit"

VALIDATION FAILURES:
✗ No error messages shown
✗ Allows invalid data
✗ Wrong error messages
✗ App crashes on error
```

---

### Scenario 8: UI/UX Verification
**Goal:** Verify visual feedback and responsiveness

```
CHECKS:
✓ All screens load without lag
✓ Buttons respond immediately
✓ Text inputs are visible
✓ Icons display properly
✓ Colors are consistent
✓ Text is readable
✓ No overlapping elements
✓ Responsive to screen size
✓ Scrolling works smoothly
✓ Dropdowns are functional
✓ "Let's Build" button styling changes
✓ Selected habits highlight
✓ Back buttons work

VISUAL ISSUES TO WATCH FOR:
✗ Blurry text
✗ Overlapping buttons
✗ Misaligned inputs
✗ Missing icons
✗ Unreadable colors
✗ Broken layouts on different screens
✗ Unresponsive touches
```

---

## Quick Test Execution

### Fast Test (10 minutes)
```
1. Run: npm start
2. Test onboarding (all 3 fields)
3. Test Make Habit selection
4. Test Break Habit selection
5. Test custom habit creation
6. Verify habit created
Done!
```

### Full Test (30 minutes)
```
1. Run: npm start
2. Complete all scenarios above
3. Test error messages
4. Test UI/UX
5. Test persistence (close and reopen)
6. Test web version: npm run web
Done!
```

---

## Reporting Issues

When you find a bug, note:

```
BUG REPORT FORMAT:
- What did you do? (Steps to reproduce)
- What happened? (Actual result)
- What should happen? (Expected result)
- Screenshots/Video (if possible)
- Device/Emulator used
- Version tested on
```

---

## Sign-Off

When all tests pass, fill in:

```
TESTING SIGN-OFF
✓ Onboarding works
✓ Make Habit selection works
✓ Break Habit selection works
✓ Custom habit (Make) works
✓ Custom habit (Break) works
✓ Data persists
✓ Errors handled
✓ UI looks good
✓ No crashes
✓ Ready for GitHub!

Tested on: [Device/Emulator]
Date: [Date]
Tester: [Your name]
```

---

## Next: Push to GitHub

Once all tests pass:

```powershell
git add .
git commit -m "feat: add complete onboarding and habit selection flow

- Add OnboardingScreen with name, age (15-80), and email fields
- Add HabitCategoryScreen with Make/Break Habit tabs
- Add CustomHabitScreen with dynamic headings
- Implement button enable/disable logic
- Add AsyncStorage persistence for user data and habits
- Tested on mobile/web"

git push origin main
```

Congratulations! Your app is ready for production! 🚀
