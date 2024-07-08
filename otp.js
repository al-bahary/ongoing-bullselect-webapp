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

document.getElementById('otp-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const otp = Array.from(document.querySelectorAll('.otp-input-group input'))
    .map(input => input.value)
    .join('');

  // Perform OTP verification here
  // Since Firebase does not provide OTP verification directly,
  // you might need to use a third-party service or custom backend for OTP verification.
  
  // Assuming OTP verification is successful, redirect to profile page
  window.location.href = 'profile.html';
});
