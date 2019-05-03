import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBnCTWkZfeYFC1yWqnROU__sdzwlUg9CIc",
    authDomain: "plan-task-project.firebaseapp.com",
    databaseURL: "https://plan-task-project.firebaseio.com",
    projectId: "plan-task-project",
    storageBucket: "plan-task-project.appspot.com",
    messagingSenderId: "324486268374"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;