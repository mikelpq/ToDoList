const firebaseConfig = {
   apiKey: "AIzaSyAOsSD1BKvEhuCDX303kzlQYPAzJpVTp-U",
   authDomain: "to-do-list-25e36.firebaseapp.com",
   projectId: "to-do-list-25e36",
   storageBucket: "to-do-list-25e36.appspot.com",
   messagingSenderId: "388047725553",
   appId: "1:388047725553:web:b6cbb0270e6d972c821a50",
   measurementId: "G-C2KQV31Y2Y"
 };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
