// import { Route,Switch } from 'react-router';
import Home from './components/Home'
import signIn from './components/SignIn'
import signUp from './components/SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {AuthProvider}  from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";

const App = () =>(
  <>
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
        </Switch>
        <Switch>
          <Route exact path='/signIn' component={signIn} />
        </Switch>
        <Switch>
          <Route exact path='/signUp' component={signUp} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
      
      
    
  </>
)

export default App;
