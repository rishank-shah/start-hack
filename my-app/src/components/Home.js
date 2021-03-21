import React from 'react';
import firebase from 'firebase'
import Dashboard from "./Dashboard/Dashboard";

require('firebase/auth')

const Home = () =>(
    <>
    <Dashboard/>

    {/* <div>
        <div className="jumbotron">
            <h2>Home</h2>
            <p className="lead">Welcome to Home page</p>
             <button onClick={()=> firebase.auth().signOut()}>Sign Out</button>
        </div>
    </div> */}
    </>
);

export default Home;