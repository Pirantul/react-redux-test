import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Page from './components/Page';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path= '/'>
            <Main />
          </Route> 
          <Route path= '/page1' > 
            <Page label="Page1" text="Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </Route>
          <Route path= '/page2' >
            <Page label="Page2" text="Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
          </Route> 
          <Route path= '/page3' >
            <Page label="Page3" text="Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum."/>
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
