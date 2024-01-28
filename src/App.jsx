import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Feed from './Feed';
import Add from './Add';
import Text from './Text';
import Confirm from './Confirm';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/feed" component={Feed} />
        <Route path="/add" component={Add} />
        <Route path="/text" component={Text} />
        <Route path="/confirm" component={Confirm} />
      </Switch>
    </Router>
  )
}