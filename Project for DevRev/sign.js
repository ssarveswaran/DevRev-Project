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
firebase.initializeApp(firebaseConfig);
const signfordb=firebase.database().ref('signform');
document.getElementById('signform').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();
  var name=getElementVal('email');
  var password=getElementVal('password');
  savmes(email,password);

  
}
const savmes=(name,password)=>{
  var newsignform=signfordb.push();
  newsignform.set({
      Email:email,
      password:password,
  });
};

const getElementVal=(id)=>{
  return document.getElementById(id).value;
}