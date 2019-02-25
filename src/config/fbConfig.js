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

database.ref('habits').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_changed
  database.ref('habits').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_added
  database.ref('habits').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  // database.ref('habits')
//   .once('value')
//   .then((snapshot) => {
//     const habits = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(habits);
//   });

// database.ref('habits').on('value', (snapshot) => {
//     const habits = [];

//     snapshot.forEach((childSnapshot)=>{
//         habits.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
// });
// console.log(habits);
// });