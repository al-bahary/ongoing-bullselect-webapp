// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZtLEw8c8p7S5fS8MUAIxcPmpzQIUW-lo",
  authDomain: "bull-select-web-app.firebaseapp.com",
  projectId: "bull-select-web-app",
  storageBucket: "bull-select-web-app.appspot.com",
  messagingSenderId: "667775341033",
  appId: "1:667775341033:web:2dfab9e43209155c613b78",
  measurementId: "G-0J3FFCDYZ6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Perform Firebase authentication here
  auth.createUserWithEmailAndPassword(email, 'defaultPassword123')
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // Store additional user info
      user.updateProfile({
        displayName: fullname,
        phoneNumber: phone,
      }).then(() => {
        // Redirect to OTP verification page
        window.location.href = 'otp-verification.html';
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
});

