# React Firebase Survey App

This is a simple survey app built with React and Firebase. Users can answer a survey and their responses will be saved to a Firebase Realtime Database.

## Setting up

Create a .env file in the root of your project and add your Firebase project credentials. Example:

```
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-auth-domain
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
FIREBASE_APP_ID=your-app-id
FIREBASE_MEASUREMENT_ID=your-measurement-id
```

Start the app:
```
yarn start
```

## Usage

When the app starts, a survey will be displayed to the user. When the user submits the survey, their responses will be saved to a Firebase Realtime Database.

To view the survey results, go to the Firebase Console and navigate to the "Realtime Database" section. You should see a new entry under the "surveyResults" node.