import { Route,Switch } from 'react-router';
import Home from './components/Home'
import SetTimer from './components/Timer/SetTimer'
import NavBar from './components/NavBar'
import signIn from './components/Auth/SignIn'
import signUp from './components/Auth/SignUp'
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider}  from "./components/Auth/Auth";

import PrivateRoute from "./components/Auth/PrivateRoute";

const App = () =>(
  <>
    <NavBar/>
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/signIn' component={signIn} />
          <Route exact path='/signUp' component={signUp} />
          <Route exact path='/set-timer' component={SetTimer} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
      
      
    
  </>
)

export default App;
