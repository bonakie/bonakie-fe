# Bonakie FE - React Native Expo + AWS Amplify

A Hello World React Native Expo application ready for AWS Amplify integration.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the App
```bash
npm start
```

Then:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Press `w` for web browser

## AWS Amplify Integration

### Install Amplify CLI
```bash
npm install -g @aws-amplify/cli
amplify configure
```

### Initialize Amplify Backend
```bash
amplify init
```

Configuration:
- Project name: bonakie-fe
- Environment: dev
- Default editor: (your choice)
- App type: javascript
- Framework: react-native
- Source directory: /
- Distribution directory: /
- Build command: npm run build
- Start command: npm start

### Add Features

**Authentication:**
```bash
amplify add auth
amplify push
```

**API (REST/GraphQL):**
```bash
amplify add api
amplify push
```

**Storage:**
```bash
amplify add storage
amplify push
```

### Configure in Your App

After `amplify push`, a file `aws-exports.js` will be generated. Update [App.js](App.js) to use it:

```javascript
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
```

## Project Structure

```
bonakie-fe/
├── App.js              # Main application component
├── app.json            # Expo configuration
├── package.json        # Dependencies
├── babel.config.js     # Babel configuration
├── assets/             # Images and static assets
└── amplify/            # Amplify backend (generated)
```

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [React Native Documentation](https://reactnative.dev/)
