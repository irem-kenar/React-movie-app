import Homepage from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/moviedetail" component={MovieDetail} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
