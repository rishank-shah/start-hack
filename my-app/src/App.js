import { Route,Switch } from 'react-router';
import Home from './components/Home'
import SetTimer from './components/Timer/SetTimer'
import NavBar from './components/NavBar'
import Chat from './components/Chat/Chat'
import signIn from './components/Auth/SignIn'
import signUp from './components/Auth/SignUp'
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider}  from "./components/Auth/Auth";
import ToDo from './components/ToDo/ToDo'
import Calendar from './components/Calendar/calendar';
import Exercise from './components/Exercise/exercise';
import PrivateRoute from "./components/Auth/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/sidebar.css'
import { mainListItems, secondaryListItems } from './components/Dashboard/listItems';
// import SideBar from './components/listitems'
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
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/todo' component={ToDo} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path='/chat' component={Chat} />
          <Route exact path='/exercise' component={Exercise} />
  
        </Switch>
      </BrowserRouter>
    </AuthProvider>
    <br />
    <br /><br /><br /><br /><br /><br />
    <Footer/>
  </>
);

export default App;

