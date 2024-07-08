// Your web app's Firebase configuration
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

// Reference to the auth object
const auth = firebase.auth();

// Reference to the profile form
const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const occupation = document.getElementById('occupation').value;
    const location = document.getElementById('location').value;
    const consent1 = document.querySelector('input[name="consent1"]').checked;
    const consent2 = document.querySelector('input[name="consent2"]').checked;
    const consent3 = document.querySelector('input[name="consent3"]').checked;

    // Create a user profile object
    const userProfile = {
        name,
        phone,
        email,
        gender,
        occupation,
        location,
        consent1,
        consent2,
        consent3
    };

    // Store user profile data in Firebase Firestore
    const db = firebase.firestore();
    const user = auth.currentUser;

    if (user) {
        db.collection('farmers').doc(user.uid).set(userProfile)
            .then(() => {
                console.log('User profile saved successfully');
                window.location.href = 'services.html'; // Redirect to the services page
            })
            .catch((error) => {
                console.error('Error saving user profile: ', error);
            });
    } else {
        console.error('No user is signed in.');
    }
});
