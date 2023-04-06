import { useCallback } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push } from "firebase/database";
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { surveyJson } from './json.js';
import 'survey-core/defaultV2.min.css';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

function App() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = sender.data;
    saveSurveyResults(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

function saveSurveyResults(results) {
  const surveyRef = ref(database, 'surveyResults');
  const newSurveyRef = push(surveyRef); // Generate a new child location using a unique key

  const { date, email, fullName, info, phone, service } = results; // Destructure the fields from the results object
  const createdOn = new Date().toISOString(); // Generate a string with the current date and time in ISO format

  set(newSurveyRef, {
    created_on: createdOn, // Set the created_on field to the generated string
    date,
    email,
    fullName,
    info,
    phone,
    service
  });
}

export default App;
