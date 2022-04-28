import {auth, signInWithGooglePopup, userCreateFromDoc} from "../../utils/firebase/firebase.utils";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { async } from "@firebase/util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {

    useEffect( () => {
        const func = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userRefDoc = await userCreateFromDoc(response.user);
            }
        }

        func();
    }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userRefDoc = await userCreateFromDoc(user);
    };

    // const logGoogleUserRedirect = async() => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
    // }
    return (
        <div>
        <h1> SIGN IN PAGE </h1>
        <button onClick={logGoogleUser}> Sign In With Google Popup </button>
        <SignUpForm />
        </div>
    )

    
}

export default SignIn;