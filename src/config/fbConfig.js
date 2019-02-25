import * as firebase from 'firebase/app';
import 'firebase/database';

 // Initialize Firebase
 const config = {
    apiKey: "AIzaSyCupSWZwfbHXhFLg5dIHxc4Pl02TeElyi8",
    authDomain: "bullet-journal-81f3c.firebaseapp.com",
    databaseURL: "https://bullet-journal-81f3c.firebaseio.com",
    projectId: "bullet-journal-81f3c",
    storageBucket: "bullet-journal-81f3c.appspot.com",
    messagingSenderId: "29906614494"
  };

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'walk a dog',
    date: '2019-02-01',
    times: 1,
    timesRepeat: [{
        "id": 101,
        "date":"2018-09-05",
        "ready": false
        }]
})
