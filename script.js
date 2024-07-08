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
const db = firebase.firestore();

// Registration form submission
document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const occupation = document.getElementById('occupation').value;
    const county = document.getElementById('county').value;
    const region = document.getElementById('region').value;

    try {
        // Create user with email and password
        const userCredential = await auth.createUserWithEmailAndPassword(email, phone);
        const user = userCredential.user;

        // Save user data in Firestore
        await db.collection('users').doc(user.uid).set({
            name,
            email,
            phone,
            gender,
            occupation,
            county,
            region
        });

        // Redirect to services page
        window.location.href = 'services.html';
    } catch (error) {
        console.error('Error during registration:', error.message);
    }
});

// Populate counties and regions dynamically
const counties = {
    "Nairobi": ["Westlands", "Kasarani", "Embakasi", "Dagoretti"],
    "Mombasa": ["Changamwe", "Jomvu", "Kisauni", "Likoni"],
    // Add all 47 counties and their regions here
};

const countySelect = document.getElementById('county');
const regionSelect = document.getElementById('region');

Object.keys(counties).forEach(county => {
    const option = document.createElement('option');
    option.value = county;
    option.textContent = county;
    countySelect.appendChild(option);
});

countySelect.addEventListener('change', () => {
    regionSelect.innerHTML = ''; // Clear previous options
    const selectedCounty = countySelect.value;
    const regions = counties[selectedCounty];
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    });
});
