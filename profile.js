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
const profileForm = document.getElementById('profile-form');

profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const dob = document.getElementById('dob').value;
    const insurance = document.getElementById('insurance').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;
    const occupation = document.getElementById('occupation').value;
    const emergencyContactName = document.getElementById('emergency-contact-name').value;
    const emergencyContactPhone = document.getElementById('emergency-contact-phone').value;
    const consent1 = document.querySelector('input[name="consent1"]').checked;
    const consent2 = document.querySelector('input[name="consent2"]').checked;
    const consent3 = document.querySelector('input[name="consent3"]').checked;

    // Create a user profile object
    const userProfile = {
        fullName,
        email,
        phoneNumber,
        dob,
        insurance,
        gender,
        address,
        occupation,
        emergencyContactName,
        emergencyContactPhone,
        consent1,
        consent2,
        consent3
    };

    // Store user profile data in Firebase Firestore (you need to configure Firestore)
    const db = firebase.firestore();
    const user = auth.currentUser;

    if (user) {
        db.collection('users').doc(user.uid).set(userProfile)
            .then(() => {
                console.log('User profile saved successfully');
                window.location.href = 'next-page-url.html'; // Redirect to the next page
            })
            .catch((error) => {
                console.error('Error saving user profile: ', error);
            });
    }
});
