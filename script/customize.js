import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, updatePassword, updateEmail, updateProfile ,deleteUser } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase configuration
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
let auth;

// Listen for auth state changes
onAuthStateChanged(getAuth(app), (user) => {
 auth = getAuth(app);

 //delete account

const deleteAccount = document.getElementById("deleteProfile")

deleteAccount.addEventListener("click", function(){
  deleteUser(user).then(() => {
    // User deleted.
    alert("Profile deleted..")
    window.location.href ="index.html"
  }).catch((error) => {
    // An error ocurred
    alert(error)
  });
})
});

// Handle change password button click
document.getElementById("changePassword").addEventListener("click", () => {
 const newPassword = document.getElementById('newPassword').value;
 const confirmPassword = document.getElementById('confirmPassword').value;

 if (newPassword.length < 6) {
  alert("Passwords must have at least 6 characters.");
  return;
 }

 if (newPassword !== confirmPassword) {
  alert("New password and confirm password do not match.");
  return;
 }

 const user = auth.currentUser;

 updatePassword(user, newPassword)
  .then(() => {alert("Password updated successfully!");
  window.location.reload();
  
})
  .catch((error) => alert("Error updating password: " + error.message));
});

// Handle change email button click
document.getElementById("changeEmail").addEventListener("click", () => {
 const newEmail = document.getElementById("newEmail").value;
 const user = auth.currentUser;

 if (newEmail !== user.email) {
  updateEmail(user, newEmail)
   .then(() => {
    alert("Email updated successfully! Please verify your new email address.");
    window.location.reload();
   })
   .catch((error) => alert("Error updating email: " + error.message));
 } else {
  alert("The new email address is the same as the current one.");
 }
});

// Handle change display name button click
document.getElementById("changeDisplayName").addEventListener("click", () => {
 const newDisplayName = document.getElementById("newDisplayName").value;
 const user = auth.currentUser;

 updateProfile(user, { displayName: newDisplayName })
  .then(() => {
   alert("Username updated successfully!");
   window.location.reload();
  })
  .catch((error) => alert("Error updating username: " + error.message));
});


