import { Route,Switch } from 'react-router';
import Home from './components/Home'
import SetTimer from './components/Timer/SetTimer'
import NavBar from './components/NavBar'
import Chat from './components/Chat/Chat'

const App = () =>(
  <>
    <NavBar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/set-timer' component={SetTimer} />
      <Route exact path='/chat' component={Chat} />

    </Switch>
  </>
)

export default App;
