import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
  // apiKey: "AIzaSyBlsf86qWsZPIlV6hqEh7J3PIu-aa8hmi0",
  // authDomain: "stmarriage-database.firebaseapp.com",
  // projectId: "stmarriage-database",
  // storageBucket: "stmarriage-database.appspot.com",
  // messagingSenderId: "1079165802195",
  // appId: "1:1079165802195:web:2b39de34622bdb890d2626",
  // measurementId: "G-84XCX1D1F6",
}

export const firebaseApp = initializeApp(firebaseConfig);

// export default ({app}) => {
//   console.log(app.context.env.apiKey)
// }

export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const firestore = getFirestore(firebaseApp);