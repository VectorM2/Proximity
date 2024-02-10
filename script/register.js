import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyA9s5b2-OQA4wY3AwMFRt6qNOz-RYyth34",
 authDomain: "login-example-dff35.firebaseapp.com",
 projectId: "login-example-dff35",
 storageBucket: "login-example-dff35.appspot.com",
 messagingSenderId: "745268124885",
 appId: "1:745268124885:web:8529e4339ca902e7ec565c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const error = document.getElementById("error");
var submit = document.getElementById("signup");

submit.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission
  
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var fullName = document.getElementById("fullName").value;

  if (!isValidEmail(email)) {
    alert("Enter a valid email address");
    return; // Exit the function early if email is not valid
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return; // Exit the function early if password is too short
  }

  if (email === "" || password === "" || fullName === "") {
    alert("Fill All input fields");
    return; // Exit the function early if any other field is empty
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("User signed up successfully");
      window.location.href = "dashboard.html"
      // Additional logic here...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // Additional error handling here...
    });
});

function isValidEmail(email) {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}




