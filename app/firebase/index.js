import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCmPy2TwY0l9qtIOBsjc6YjIUuTMAFN1Ao",
      authDomain: "jimson-todo.firebaseapp.com",
      databaseURL: "https://jimson-todo.firebaseio.com",
      storageBucket: "jimson-todo.appspot.com",
      messagingSenderId: "344193698703"
    };
    
  firebase.initializeApp(config);
} catch (e) {
  
}
  
  export var firebaseRef = firebase.database().ref();
  export default firebase;