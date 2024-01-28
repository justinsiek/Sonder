import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Feed from './Feed';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/feed" component={Feed} />
      </Switch>
    </Router>
  )
}