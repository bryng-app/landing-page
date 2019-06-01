import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'key',
  authDomain: 'domain',
  databaseURL: 'database',
  projectId: 'projectId',
  storageBucket: 'bucket',
  messagingSenderId: 'messagingSenderId',
};
firebase.initializeApp(config);

const db = firebase.firestore();

const emailsCollection = db.collection('Emails');
const blogsCollection = db.collection('Blogs');

export {
  db,
  emailsCollection,
  blogsCollection,
};
