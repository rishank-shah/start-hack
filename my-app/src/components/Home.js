import React from 'react';
import firebase from 'firebase'
require('firebase/auth')

const Home = () =>(
    <div>
        <div className="jumbotron">
            <h2>Home</h2>
            <p className="lead">Welcome to Home page</p>
             <button onClick={()=> firebase.auth().signOut()}>Sign Out</button>
        </div>
    </div>
);

export default Home;