import * as backend from 'firebase';

let config = {
    apiKey: "AIzaSyAIuJtgUVavfWtIDXF6-5SB_C66sIheaLQ",
    authDomain: "location-accra.firebaseapp.com",
    databaseURL: "https://location-accra.firebaseio.com",
    projectId: "location-accra",
    storageBucket: "location-accra.appspot.com",
    messagingSenderId: "49551940158"
};

backend.initializeApp(config);

export { backend }