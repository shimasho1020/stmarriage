import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

console.log(process.env.apiKey)
const firebaseConfig = {
  // apiKey: process.env.FB_API_KEY,
  // authDomain: process.env.FB_AUTH_DOMAIN,
  // projectId: process.env.FB_PROJECT_ID,
  // storageBucket: process.env.FB_STORAGE_BUCKET,
  // messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  // appId: process.env.FB_ID,
  // measurementId: process.env.FB_MEASUREMENT_ID,
  apiKey: "AIzaSyBlsf86qWsZPIlV6hqEh7J3PIu-aa8hmi0",
  authDomain: "stmarriage-database.firebaseapp.com",
  projectId: "stmarriage-database",
  storageBucket: "stmarriage-database.appspot.com",
  messagingSenderId: "1079165802195",
  appId: "1:1079165802195:web:2b39de34622bdb890d2626",
  measurementId: "G-84XCX1D1F6",
}

export const firebaseApp = initializeApp(firebaseConfig);

// export default  ({app}, inject) => {
//   // console.log(app.context.$config.apiKey)
//   const Firestore = app.$fire.firestore
//   inject('Firestore', Firestore)

// }

export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const firestore = getFirestore(firebaseApp);