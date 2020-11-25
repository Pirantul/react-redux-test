import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  const Footer = ({title}) => (<footer>{title}</footer>);
  const footer="footer";


  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path= '/'component={Main} /> 
        <Route path= '/page1'component={Page1} /> 
        <Route path= '/page2'component={Page2} /> 
        <Route path= '/page3'component={Page3} /> 
        <Footer title={footer}/>
      </Router>
    </div>
  );
}

export default App;
