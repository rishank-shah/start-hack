import { Route,Switch } from 'react-router';
import Home from './components/Home'

const App = () =>(
  <>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </>
)

export default App;
