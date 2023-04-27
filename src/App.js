import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./sections/Services/Services";
import { BuyWant } from "./components/BuyWant/BuyWant";
import { PropertiesList } from "./sections/PropertiesList/PropertiesList";
import { propertiesList } from "./data";
import { firebaseApp } from "./utils/firebase";
import { Button } from "./components/Button/Button";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Login from "./login";

function App() {
  const auth = getAuth();

  const [email, setEmail] = useState("anwaar@gmail.com");
  const [password, setPassword] = useState("Pakistan123");

  // const createNewUser = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log("new user", userCredential.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const signInUser = () => {
  //   signInWithEmailAndPassword(auth, "arslanshahab@gmail.com", password)
  //     .then((userCredential) => {
  //       console.log("SIGNED IN USER", userCredential.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const signOutUser = async () => {
  //   await signOut(auth);
  // };

  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     console.log("USER********", user.uid);
  //   } else {
  //     console.log("NO USER FOUND | USER IS LOGGED OUT");
  //   }
  // });

  return (
    <React.Fragment>
      <Navbar />
      {/* <Button onClick={createNewUser} title="Create User" size="lg" />
      <Button onClick={signInUser} title="Sign In" size="lg" />
      <Button onClick={signOutUser} title="Sign Out" size="lg" /> */}
      <Hero />
      <BuyWant />
      <Services />
      <PropertiesList
        title="Top areas by city"
        propertiesList={propertiesList}
      />
      <PropertiesList
        title="Recent Properties for Sale"
        propertiesList={propertiesList}
      />
      <PropertiesList
        title="Recent Properties for Rent"
        propertiesList={propertiesList}
      />
      <Login />
    </React.Fragment>
  );
}

export default App;
