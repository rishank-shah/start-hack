import React, { useCallback } from 'react';
import { withRoute } from 'react-router';
import app from "./firebase";

const SignUp = ({history}) =>{
    
        const handleSignUp = useCallback(async event => {
            event.preventDefault();
            const { email, password} = event.target.elements;
            try {
                await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        }, [history]);

        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <label>
                        Email
                        <input name="email" type="email" placeholder="Email"  />
                    </label>
                    <label>
                        password
                        <input name="password" type="password" placeholder="Password" />
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );

        }

export default SignUp;