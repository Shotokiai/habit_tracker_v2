# 🚀 Deploy to Vercel - Complete Guide

## Your Situation

✅ You have a React Native Expo app
✅ You have a Vercel deployment at: https://habit-tracker-v2-xi.vercel.app/
❓ You want to deploy the updated code there

---

## ⚠️ Important Note

Your current app is built with **React Native** (for mobile), but Vercel hosts **web applications**. 

You have **2 options**:

### **Option A: Deploy as Web App (Recommended)**
Use the web version of your React Native app on Vercel

### **Option B: Convert to Next.js**
Build a full Next.js web app instead

---

## 🎯 **Option A: Deploy Current App as Web (Faster)**

### Step 1: Update package.json

Add a build script for web:

```json
{
  "scripts": {
    "start": "expo start",
    "web": "expo start --web",
    "build": "expo export --platform web",
    "build:web": "expo build:web"
  }
}
```

### Step 2: Create Vercel Configuration

Create file: `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "web-build"
}
```

### Step 3: Update package.json for Vercel

```json
{
  "scripts": {
    "start": "expo start",
    "web": "expo start --web",
    "build": "expo export --platform web",
    "dev": "expo start --web"
  }
}
```

### Step 4: Push to GitHub

```powershell
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

### Step 5: Deploy on Vercel

1. Go to: https://vercel.com
2. Login with your GitHub account
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Vercel will auto-deploy when you push to GitHub!

---

## ✅ **Option B: Convert to Next.js Web App (Better for Web)**

This gives you a proper web app instead of React Native.

### Step 1: Create next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
```

### Step 2: Create app directory structure

```
/app
  /layout.jsx
  /page.jsx
/components
  /OnboardingScreen.jsx
  /HabitCategoryScreen.jsx
  /CustomHabitScreen.jsx
  /HabitGrid.jsx
/styles
  /globals.css
```

### Step 3: Create Habit Tracker Pages

Create: `app/page.jsx`

```jsx
'use client'

import { useState, useEffect } from 'react'
import OnboardingScreen from '@/components/OnboardingScreen'
import HabitCategoryScreen from '@/components/HabitCategoryScreen'
import CustomHabitScreen from '@/components/CustomHabitScreen'
import HabitTracker from '@/components/HabitTracker'

export default function Home() {
  const [appState, setAppState] = useState('loading')
  const [userData, setUserData] = useState(null)
  const [habits, setHabits] = useState([])

  useEffect(() => {
    // Load from localStorage
    const savedUser = localStorage.getItem('userData')
    const savedHabits = localStorage.getItem('habits')
    
    if (savedUser) {
      setUserData(JSON.parse(savedUser))
      setAppState(savedHabits ? 'tracker' : 'category')
    } else {
      setAppState('onboarding')
    }
  }, [])

  return (
    <main>
      {appState === 'loading' && <div>Loading...</div>}
      {appState === 'onboarding' && (
        <OnboardingScreen onComplete={(data) => {
          setUserData(data)
          localStorage.setItem('userData', JSON.stringify(data))
          setAppState('category')
        }} />
      )}
      {appState === 'category' && (
        <HabitCategoryScreen />
      )}
      {appState === 'tracker' && (
        <HabitTracker />
      )}
    </main>
  )
}
```

---

## 🔄 **Quick Comparison**

| Aspect | Option A | Option B |
|--------|----------|----------|
| Time | 10 min | 1-2 hours |
| Complexity | Simple | More work |
| Native feel | Mobile-ish | Web-native |
| Best for | Quick deploy | Production web |
| File changes | Minimal | Major restructure |

---

## 📋 **Choose Your Path**

### 👉 **I recommend Option A (Faster)**

If you want to deploy **quickly**:

1. Follow steps in "Option A" above
2. Push to GitHub
3. Deploy on Vercel
4. Done! ✓

### 👉 **Go with Option B (Better Quality)**

If you want a **proper web app**:

1. Restructure to Next.js
2. Convert components to web
3. Remove React Native dependencies
4. Deploy to Vercel
5. Much better for web users

---

## 🚀 **Step-by-Step for Option A (Recommended)**

### Step 1: Update package.json

```powershell
# In your project folder
code package.json
```

Replace the scripts section with:

```json
"scripts": {
  "start": "expo start",
  "web": "expo start --web",
  "build": "expo export --platform web",
  "build:web": "expo build:web",
  "dev": "expo start --web"
}
```

### Step 2: Install web dependencies

```powershell
npm install
npm install -D @react-native-web/babel-plugin
```

### Step 3: Update babel.config.js

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['@react-native-web/babel-plugin'],
  };
};
```

### Step 4: Build for web

```powershell
npm run build
```

### Step 5: Create vercel.json

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "NODE_ENV": "production"
  }
}
```

### Step 6: Push to GitHub

```powershell
git add .
git commit -m "feat: prepare for Vercel deployment"
git push origin main
```

### Step 7: Deploy on Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your repository
5. Click "Import"
6. Click "Deploy"
7. Wait 2-3 minutes
8. Your app is live! 🎉

---

## 🔗 **After Deployment**

Your app will be at:
```
https://habit-tracker-v2-xi.vercel.app
```

Every time you push to GitHub:
- Vercel auto-detects changes
- Runs build command
- Deploys automatically
- Takes 2-3 minutes

---

## 🐛 **Troubleshooting**

### "Build failed on Vercel"

Check the build logs:
1. Go to Vercel dashboard
2. Click your project
3. Click "Deployments"
4. Click the failed deployment
5. See error messages
6. Fix and push again

### "App not showing on Vercel"

1. Check if outputDirectory is correct
2. Verify build command works locally
3. Check environment variables

### "Components not loading"

1. Use full paths for imports
2. Check file extensions (.tsx vs .jsx)
3. Verify components export default

---

## 📝 **Complete Deployment Checklist**

- [ ] Updated package.json with build scripts
- [ ] Updated babel.config.js for web
- [ ] Tested locally: `npm run web`
- [ ] Created vercel.json
- [ ] Pushed to GitHub
- [ ] Connected to Vercel
- [ ] Deployment successful ✓

---

## 💡 **Pro Tips**

1. **Test locally first:**
   ```powershell
   npm run web
   ```

2. **Check build output:**
   ```powershell
   npm run build
   ls dist/
   ```

3. **Preview on Vercel:**
   - Each PR gets a preview URL
   - Check before merging to main

4. **Enable auto-deploy:**
   - Already enabled by default
   - Just push to main branch

---

## 🎯 **Next 30 Minutes**

1. **Update package.json** (2 min)
2. **Update babel.config.js** (1 min)
3. **Create vercel.json** (1 min)
4. **Test locally** (5 min)
5. **Push to GitHub** (2 min)
6. **Deploy on Vercel** (1 click)
7. **Wait for build** (3-5 min)
8. **Check live link** (1 min)

**Total: ~20 minutes!**

---

## 📞 **Need Help?**

All issues covered in: LOCAL_TESTING_GUIDE.md

Or check Vercel docs: https://vercel.com/docs

---

**Ready to deploy?** Start with Option A! 🚀
