import React from "react";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../sign-up-form/sign-up-form.component.jsx";


import {
  auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  // useEffect(async() => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  //   if(response){
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in Redirect</button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
