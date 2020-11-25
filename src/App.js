import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import Page from './components/Page';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path= '/'component={Main} /> 
        <Route path= '/page1' render={() => <Page label="Page1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />} />
        <Route path= '/page2' render={() => <Page label="Page2" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />} />
        <Route path= '/page3' render={() => <Page label="Page3" text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />} />
      </Router>
    </div>
  );
}

export default App;
