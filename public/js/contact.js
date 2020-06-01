// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCWfWdtFbf9Xlx6TjRsaXxJtOpuBuM4dyI",
  authDomain: "merllonjones-f997d.firebaseapp.com",
  databaseURL: "https://merllonjones-f997d.firebaseio.com",
  projectId: "merllonjones-f997d",
  storageBucket: "merllonjones-f997d.appspot.com",
  messagingSenderId: "476665269558",
  appId: "1:476665269558:web:f2bf132665f192a3713797",
  measurementId: "G-RY5DW8VH87"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



// Reference messages collection
var messagesRef = firebase.database().ref('ContactData');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
e.preventDefault();

// Get values
var name = getInputVal('name');
// var company = getInputVal('company');
var email = getInputVal('email');
var subject = getInputVal('subject');
var message = getInputVal('message');

// Save message
saveMessage(name, subject, email,  message);

// Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

// Clear form
document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
  name: name,
  subject:subject,
  email:email,
  
  message:message
});



function sent(){
  alert("Your message has been sent");
}
}