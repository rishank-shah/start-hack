import React, { useCallback, useContext } from 'react';
import { Redirect, withRouter } from 'react-router';
import app from "./firebase";
import { AuthContext } from  "./Auth"


const SignIn = ({history}) =>{
    
        const handleSignIn = useCallback(async event => {
            event.preventDefault();
            const { email, password} = event.target.elements;
            try {
                await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        }, [history]);

            const { currentUser } = useContext(AuthContext);

            if (currentUser) {
                return <Redirect to="/" />;
            }
 
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={handleSignIn}>
                    <label>
                        Email
                        <input name="email" type="email" placeholder="Email"  />
                    </label>
                    <label>
                        password
                        <input name="password" type="password" placeholder="Password" />
                    </label>
                    <button type="submit">Sign In</button>

                </form>
            </div>
        );

        }

export default withRouter(SignIn);