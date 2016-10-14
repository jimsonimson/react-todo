import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCmPy2TwY0l9qtIOBsjc6YjIUuTMAFN1Ao",
    authDomain: "jimson-todo.firebaseapp.com",
    databaseURL: "https://jimson-todo.firebaseio.com",
    storageBucket: "jimson-todo.appspot.com",
    messagingSenderId: "344193698703"
  };
  firebase.initializeApp(config);
  
  var firebaseRef = firebase.database().ref();
  
  //CREATE 
  // 1. You can create database by calling firebase.database().ref() and then call set({}) and pass in an object of the keyvalue pairings to save in the database
  //2. You can access the the child method on firebaseRef to access a specific object property on the database. ex firebaseRef.child('NAME_OF_PROPERTY')
  
  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Jimson',
      age: 24
    }
  });
  
  var todosRef = firebaseRef.child('todos');
  
  todosRef.on('child_added', (snapshot)=>{
    console.log('child_added', snapshot.key, snapshot.val());
  });
  
  todosRef.push({
    text: 'Todo 1'
  });
  
  todosRef.push({
    text: 'TODO 2'
  })
  
  //CHALLENGE: Add notes ref to firebase array and console.log everytime a value is changed 
  
  // var notesRef = firebaseRef.child('notes');
  // 
  // notesRef.on('child_added', (snapshot) => {
  //   console.log('child_added', snapshot.key, snapshot.val());
  // });
  // 
  // notesRef.on('child_changed', (snapshot) => {
  //   console.log('child_changed', snapshot.key, snapshot.val());
  // });
  // 
  // notesRef.on('child_removed', (snapshot) => {
  //   console.log('child_removed', snapshot.key, snapshot.val());
  // });
  // 
  // var newNoteRef = notesRef.push({
  //   text: 'Walk the dog!'
  // });
  // console.log('Todo id', newNoteRef.key);
  

//GET
//1. To get data once from the database, use the method firebaseRef.once()
//2. To continuously grab data, use the method firebaseRef.on('value', (snapshot)=>{})
//3. To end an on listener method, use off(); to stop all listeners.
//3a. To end a specific on listerner, pass the listener variable into the off(logData). This is useful so you can target only specific listeners. 
//4. The promise sends back a snapshot that contains different methods to access the information retrieved from the database
//4a. Snapshot has method, snapshot.val(); to grab all contents from the promise
//4b. Snapshot has property, snapshot.key to return the name of the object you're accessing, (if you define a child to access).

// firebaseRef.child('app').once('value').then((snapshot)=>{
//   console.log('Got entire database', snapshot.key, snapshot.val());
// },(e)=>{console.log('unable to fetch value', e)});

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// }

// firebaseRef.on('value', logData);

// firebaseRef.off();

// firebaseRef.update({
//   isRunning: false
// })
  
//UPDATE
//CHALLENGE update app.name value and user.name value all in one call
  
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Apprrication',
//   'user/name': 'Ronathan'
// });
// 
// firebaseRef.child('app').update({
//   name: 'Todo Applicashun'
// }).then(()=>{
//   console.log('update app name success')
//   firebaseRef.child('user').update({
//     name: 'Pimpson'
//   }).then(()=>{console.log('Update user name success')}, (e)=>{
//     console.log('error updating user name')
//   })
// }, (e)=>{console.log('error updating app.name')});

//REMOVE

// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: '2.0.0',
//   name: null
// });

// CHALLENGE remove 'isRunning' and user.'age' values from firebase

// firebaseRef.update({
//   isRunning: null,
//   'user/age': null
// });
