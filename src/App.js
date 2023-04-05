import { useCallback } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push } from "firebase/database";
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { surveyJson } from './json.js';
import 'survey-core/defaultV2.min.css';

require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
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

  set(newSurveyRef, {
    date,
    email,
    fullName,
    info,
    phone,
    service
  });
}

export default App;
