# Testing Setup Visual Guide

## Installation Flowchart

```
START
  ↓
┌─────────────────────────────┐
│ Prerequisites Installed?    │
│ - Node.js?                  │
│ - npm?                      │
└─────────────────────────────┘
  ↓ No
  ├→ Install Node.js from nodejs.org
  ↓ Yes
┌─────────────────────────────┐
│ Install Global Tools        │
│ npm install -g expo-cli     │
│ npm install -g eas-cli      │
└─────────────────────────────┘
  ↓
┌─────────────────────────────┐
│ Project Dependencies        │
│ npm install                 │
└─────────────────────────────┘
  ↓
┌─────────────────────────────┐
│ Ready to Test!              │
└─────────────────────────────┘
```

---

## Testing Method Decision Tree

```
         WANT TO TEST?
              ↓
         ┌────┴────┐
         ↓         ↓
    NO PHONE?   HAS PHONE?
         ↓         ↓
    ┌────────────────────────┐
    │ USE WEB TESTING        │
    │ npm run web            │
    │ Tests: Form logic      │
    │ Time: 5 min            │
    └────────────────────────┘
    
    │                │
    │                ┌────────────────────────┐
    │                │ HAS EMULATOR RUNNING?  │
    │                ├────────┬───────────────┤
    │                │ YES    │ NO            │
    │                ↓        ↓               │
    │        ┌─────────────────────────────┐ │
    │        │ USE ANDROID EMULATOR        │ │
    │        │ npm run android             │ │
    │        │ Tests: Full mobile          │ │
    │        │ Time: 10 min                │ │
    │        └─────────────────────────────┘ │
    │        
    │        ┌────────────────────────────┐
    │        │ SET UP EMULATOR            │
    │        │ Android Studio → Emulator  │
    │        │ Time: 15 min               │
    │        └────────────────────────────┘
    │
    └──────────────────────────┬────────────────────┐
                               ↓                    ↓
                        QUICK TEST?         FINAL VERIFICATION?
                               ↓                    ↓
                        ┌──────────────────────────────────┐
                        │ USE EXPO GO (FASTEST!)           │
                        │ 1. npm start                     │
                        │ 2. Scan QR with phone            │
                        │ 3. Tests: All features           │
                        │ 4. Time: 5 min                   │
                        └──────────────────────────────────┘
                        
                        ┌──────────────────────────────────┐
                        │ BUILD APK                        │
                        │ 1. eas login                     │
                        │ 2. npm run build:preview         │
                        │ 3. Download & install            │
                        │ 4. Tests: Standalone app         │
                        │ 5. Time: 15 min                  │
                        └──────────────────────────────────┘
```

---

## Testing Flow with Expo Go

```
LAPTOP                              PHONE
═════════════════════════════════════════════════════════════

1. npm start
   ↓
   Metro Bundler starts
   ↓
   QR Code displayed ────────────→ 2. Open Expo Go App
                                      ↓
                                      Scan QR Code
                                      ↓
                                   3. App Downloads
                                      ↓
                                   4. App Runs
                                      ↓
                                   5. Test All Features
                                      ↓
   6. Edit Code ←─────────────────── Changes show instantly
   ↓
   Press 'r' in terminal
   ↓
   App reloads on phone
   ↓
   Continue testing
   ↓
   Press 'q' to quit
```

---

## Component Structure

```
App.tsx (Main)
  ├── State: appState (onboarding|category|customHabit|tracker)
  ├── State: userData {name, age, email}
  ├── State: habits []
  │
  └── Screens:
      ├── appState === "onboarding"
      │   └── OnboardingScreen
      │       ├── Input: Name
      │       ├── Dropdown: Age (15-80)
      │       ├── Input: Email
      │       └── Button: Continue
      │           └── Saves to AsyncStorage
      │           └── Navigate to category
      │
      ├── appState === "category"
      │   └── HabitCategoryScreen
      │       ├── Tab: Make Habit
      │       │   └── 5 Habits + Create Your Own
      │       ├── Tab: Break Habit
      │       │   └── 5 Habits + Create Your Own
      │       └── Button: Let's Build (disabled/enabled)
      │           ├── If predefined → Navigate to tracker
      │           └── If create your own → Navigate to customHabit
      │
      ├── appState === "customHabit"
      │   └── CustomHabitScreen
      │       ├── Heading (dynamic based on type)
      │       ├── Input: Habit description
      │       ├── Counter: Characters used
      │       └── Button: Let's Build (disabled/enabled)
      │           └── Create habit → Navigate to tracker
      │
      └── appState === "tracker"
          └── HabitGrid
              ├── Grid: 31x31 dots
              ├── Line: Connecting marked dots
              └── Buttons: Let's Go, Habit Missed
```

---

## Data Persistence Flow

```
User Data Flow:
═════════════════════════════════════════════════════════════

ONBOARDING SCREEN
  │
  ├─→ User enters: Name, Age, Email
  │
  ├─→ Click "Continue"
  │
  └─→ Save to AsyncStorage
      {
        "userData": {
          "name": "John",
          "age": 28,
          "email": "john@example.com"
        }
      }

HABIT TRACKER
  │
  ├─→ User creates habit
  │
  └─→ Save to AsyncStorage
      {
        "habits": [
          {
            "id": "1234567890",
            "name": "Walk 2km",
            "person": "John",
            "dayRecords": [],
            "createdAt": "2025-11-16T...",
            "monthYear": "2025-11"
          }
        ]
      }

APP RESTART
  │
  ├─→ App checks AsyncStorage
  │
  ├─→ If userData exists
  │   └─→ Skip onboarding → Go to category
  │
  ├─→ If habits exist
  │   └─→ Go to tracker
  │
  └─→ If no data
      └─→ Show onboarding
```

---

## Error Handling Flow

```
USER ACTION
  ↓
VALIDATION
  ├─→ Empty field? ❌
  │   └─→ Show: "Please fill in all fields"
  │
  ├─→ Invalid email? ❌
  │   └─→ Show: "Please enter a valid email"
  │
  ├─→ Empty habit? ❌
  │   └─→ Show: "Please describe your habit"
  │
  └─→ All valid? ✓
      └─→ Process request
          └─→ Save data
              └─→ Navigate next screen
```

---

## Testing Sequence Diagram

```
TIME    USER              APP              PHONE            STORAGE
═══════════════════════════════════════════════════════════════════════

0s      Opens app      ──────────→ Loads  ──────→ Loads from
        (fresh)           app         phone        AsyncStorage
                                      
                        Check userData
                        ├─ Exists? → Go to category
                        └─ None? → Show onboarding

5s      Types name:
        "Alice"        ──────────→ Store name        [text input]
        
10s     Selects age:
        "25"           ──────────→ Store age         [selected]
        
15s     Types email:
        "alice@test.com"──────────→ Validate email  [text input]
        
20s     Clicks
        "Continue"    ──────────→ Save to storage → Save user data
                                  ↓
                                Navigate to
                                category

22s     Sees Make      ──────────→ Display     
        Habit tab       5 habits

27s     Clicks habit:  ──────────→ Highlight        [selected]
        "Walk 2km"      Habit
                        Enable button

30s     Clicks
        "Let's Build"  ──────────→ Create habit  → Save habit
                                  ↓
                                Navigate to
                                tracker

32s     Sees habit
        in grid        ──────────→ Display grid
                                  Ready to track

35s     Closes app    ──────────→ Pause
                                  
        ... (seconds later)
        
40s     Reopens app   ──────────→ Load app    → Read user data
                                  ↓ Skip          & habits
                                onboarding
                                Show
                                category or
                                tracker
```

---

## File Changes Summary

```
FILES CREATED:
✓ components/OnboardingScreen.tsx          (NEW)
✓ components/HabitCategoryScreen.tsx       (NEW)
✓ components/CustomHabitScreen.tsx         (NEW)
✓ LOCAL_TESTING_GUIDE.md                   (NEW)
✓ TESTING_CHECKLIST.md                     (NEW)
✓ QUICK_REFERENCE.md                       (NEW)
✓ START_TESTING.bat                        (NEW)
✓ START_TESTING.ps1                        (NEW)

FILES MODIFIED:
✓ App.tsx                                  (UPDATED - main state management)

FILES UNCHANGED:
  components/HabitGrid.tsx
  components/DotGrid.tsx
  components/habit-grid.tsx
  components/habit-header.tsx
  components/habit-tracker.tsx
  package.json
  ... (other files)
```

---

## Testing Verification Matrix

```
FEATURE                 WEB     EXPO GO   EMULATOR   APK
════════════════════════════════════════════════════════
Onboarding Form         ✓       ✓         ✓          ✓
Form Validation         ✓       ✓         ✓          ✓
Age Dropdown            ~       ✓         ✓          ✓
Category Screen         ✓       ✓         ✓          ✓
Make Habit Display      ✓       ✓         ✓          ✓
Break Habit Display     ✓       ✓         ✓          ✓
Habit Selection         ✓       ✓         ✓          ✓
Button Logic            ✓       ✓         ✓          ✓
Custom Habit            ✓       ✓         ✓          ✓
Data Persistence        ✓       ✓         ✓          ✓
Habit Grid              ✓       ✓         ✓          ✓
SVG Line Drawing        ✓       ✓         ✓          ✓
Full Mobile UX          -       ✓         ✓          ✓

Legend:
✓ = Fully supported
~ = Partial (web picker differs)
- = Not applicable

Recommendation: Test with Web first, then Expo Go, then APK
```

---

## Quick Test Checklist Visual

```
ONBOARDING:
[?] Name field visible
[?] Age dropdown works (15-80)
[?] Email field visible
[?] Continue button visible
[?] Validation works

CATEGORY SELECTION:
[?] Make Habit tab active
[?] Break Habit tab clickable
[?] 5 habits visible per tab
[?] Create your own option visible
[?] Habits are selectable
[?] Let's Build button disabled by default
[?] Let's Build button enables on selection

CUSTOM HABIT:
[?] Back button visible
[?] Correct heading (changes per type)
[?] Text input visible
[?] Character counter works
[?] Let's Build disabled when empty
[?] Let's Build enabled when text entered

TRACKER:
[?] Habit visible in grid
[?] Can mark habits with dots
[?] Line connects dots
[?] Can add more habits
[?] Can delete habits

PERSISTENCE:
[?] Close app
[?] Reopen app
[?] Still on tracker (not onboarding)
[?] All habits still there
[?] User data still there
```

---

Done! You have complete visual documentation for testing! 🎉
