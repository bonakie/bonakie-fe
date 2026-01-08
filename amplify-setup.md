# AWS Amplify Setup Guide

## Prerequisites
1. Install AWS Amplify CLI: `npm install -g @aws-amplify/cli`
2. Configure AWS credentials: `amplify configure`

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Initialize Amplify
```bash
amplify init
```

Follow the prompts:
- Enter a name for the project: bonakie-fe
- Enter a name for the environment: dev
- Choose your default editor
- Choose the type of app: javascript
- What javascript framework: react-native
- Source Directory Path: /
- Distribution Directory Path: /
- Build Command: npm run build
- Start Command: npm start

### 3. Add Authentication (Optional)
```bash
amplify add auth
```

### 4. Add API (Optional)
```bash
amplify add api
```

### 5. Push Changes to AWS
```bash
amplify push
```

This will create your backend resources and generate the `aws-exports.js` file.

### 6. Update App.js
After running `amplify push`, import the generated config:

```javascript
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
```

## Running the App

```bash
npm start
```

Then:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Press `w` for web browser

## Deploying to AWS Amplify Hosting

### Option 1: Connect GitHub Repository

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "Host web app"
3. Connect your GitHub/GitLab/Bitbucket repository
4. AWS Amplify will automatically detect the `amplify.yml` file
5. Configure build settings (already set in amplify.yml)
6. Deploy!

### Option 2: Manual Deploy

```bash
amplify add hosting
amplify publish
```

### amplify.yml Configuration

The `amplify.yml` file in the root directory configures:
- **Backend**: Automatically builds your Amplify backend
- **Frontend**: Builds the web version of your React Native app
- **Artifacts**: Outputs to `web-build` directory
- **Cache**: Caches `node_modules` for faster builds
- **Custom Headers**: Sets CORS and cache headers

## Useful Amplify Commands

- `amplify status` - View current status
- `amplify console` - Open Amplify console
- `amplify pull` - Pull latest backend changes
- `amplify publish` - Build and deploy to hosting
- `amplify delete` - Delete all resources
