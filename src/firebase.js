import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBavW7Qfbh5FHRI8I7qNQnByI4lkKpfJcg',
  authDomain: 'noteapp-db713.firebaseapp.com',
  projectId: 'noteapp-db713',
  storageBucket: 'noteapp-db713.appspot.com',
  messagingSenderId: '1005860784751',
  appId: '1:1005860784751:web:d876c9de1695ffeba75b9a',
  measurementId: 'G-Z1Q02FTTB3',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
