import Homepage from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
