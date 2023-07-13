import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA_a7AiaOF8Fdy_1qDckdsWJFp9UiqRol0",
    authDomain: "covid-f1ac9.firebaseapp.com",
    databaseURL: "https://covid-f1ac9-default-rtdb.firebaseio.com",
    projectId: "covid-f1ac9",
    storageBucket: "covid-f1ac9.appspot.com",
    messagingSenderId: "480494790086",
    appId: "1:480494790086:web:bdba315915c2436de8fec7",
    measurementId: "G-MMH7JNS3ZD"
  };
  document.getElementById("submit").addEventListener("click", function() {
    var email =  document.getElementById("ename").value;
    var password = document.getElementById("password").value;

    signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!!!");
      document.getElementById('logout').style.display = 'block';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });		  		  
  });
