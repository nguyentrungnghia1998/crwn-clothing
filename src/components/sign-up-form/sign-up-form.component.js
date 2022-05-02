import { useState } from "react";

import { createAuthUserWithEmailAndPassword , userCreateFromDoc} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import './sign-up-form.styles.scss'
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields)
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        
        if (password !== confirmPassword) {
            alert("Password and confirm password not match");
            return;
        }

        try {
            const {user}= await createAuthUserWithEmailAndPassword(email,password);
            const info = await userCreateFromDoc(user, {displayName})
            resetFormFields();
        } catch(error) {
            if (error.code==='auth/email-already-in-use') {
                alert ('Account already in use')
            } else {
            console.log('Error:',error);
            }
        }
        
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
        console.log(event);
    }
    return (
        <div className="sign-up-container">
            <h2> Don't have a account user</h2>
            <span>Sign up with Username and Pass</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label="DisplayName"
                type="text" 
                required 
                onChange={handleChange} 
                name="displayName" 
                value={displayName} />
                <FormInput
                label="Email"
                type="email" 
                required 
                onChange={handleChange} 
                name="email" 
                value={email} />
                <FormInput 
                label="Password"
                type="password" 
                required 
                onChange={handleChange} 
                name="password" 
                value={password}/>
                <FormInput
                label="Confirm Password"
                type="password" 
                required 
                onChange={handleChange} 
                name="confirmPassword" 
                value={confirmPassword}/>
                <Button type="submit">Sign Up </Button>
            </form>
        </div>
    )
}

export default SignUpForm;