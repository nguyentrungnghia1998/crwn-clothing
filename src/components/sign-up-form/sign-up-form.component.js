import { useState } from "react";

import { createAuthUserWithEmailAndPassword , userCreateFromDoc} from "../../utils/firebase/firebase.utils";


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
        <div>
            <h1>Sign up with Username and Pass</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}></input>
                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email}></input>
                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password}></input>
                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;