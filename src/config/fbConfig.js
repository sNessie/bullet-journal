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



// Setup data subscription
database.ref('habits').on('value', (snapshot) => {
    const habits = [];

    snapshot.forEach((childSnapshot)=>{
        habits.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
});
console.log(habits);
});

