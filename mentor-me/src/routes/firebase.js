import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASqVCGyarpn09OTRx5hTQQKJHiZL1qfAg",
  authDomain: "mentor-me-dev.firebaseapp.com",
  projectId: "mentor-me-dev",
  storageBucket: "mentor-me-dev.appspot.com",
  messagingSenderId: "219042213240",
  appId: "1:219042213240:web:80283c9eca9287265fac8d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export default app;