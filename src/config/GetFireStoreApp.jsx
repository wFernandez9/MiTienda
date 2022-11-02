
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


/* const firebaseConfig = {
    apiKey: "AIzaSyAixkf0adeFk8dFMAJ1aifkSohVgm3kYa8",
    authDomain: "walter-fernandez.firebaseapp.com",
    projectId: "walter-fernandez",
    storageBucket: "walter-fernandez.appspot.com",
    messagingSenderId: "502129238841",
    appId: "1:502129238841:web:a014d0efcd504010713ee8"
}; */

const firebaseConfig = {

    apiKey: "AIzaSyACzTKxTj4vqJmAmFBOlWPm5Huk908YFjs",

    authDomain: "proyecto-react-coderhous-22c3c.firebaseapp.com",

    projectId: "proyecto-react-coderhous-22c3c",

    storageBucket: "proyecto-react-coderhous-22c3c.appspot.com",

    messagingSenderId: "429353057728",

    appId: "1:429353057728:web:5dd604aaff8d2573349c25"

};

const app = initializeApp(firebaseConfig);

/* export const getFireStoreApp = () => {
    return app
} */

export const db = getFirestore(app);