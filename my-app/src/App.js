import { Route,Switch } from 'react-router';
import Home from './components/Home'
import SetTimer from './components/Timer/SetTimer'
import NavBar from './components/NavBar'
import signIn from './components/Auth/SignIn'
import signUp from './components/Auth/SignUp'
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider}  from "./components/Auth/Auth";
import ToDo from './components/ToDo/ToDo'
import Calendar from './components/Calendar/calendar';

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
          <Route exact path='/todo' component={ToDo} />
          <Route exact path='/calendar' component={Calendar} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
      
      
    
  </>
)

export default App;
