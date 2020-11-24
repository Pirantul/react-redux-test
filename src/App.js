import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

function App(props) {
  const Main = ({title}) => (<main>{title}</main>);
  const About = ({title}) => (<div className='about'>{title}</div>);
  const Footer = ({title}) => (<footer>{title}</footer>);
  const main="main page", 
        about="about page", 
        footer="footer";


  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path= '/' render={ (props) => <Main title={main}  /> } /> 
        <Route path='/about' render={ (props) => <About title={about}  /> } />  
        <Footer title={footer}/>
      </Router>
    </div>
  );
}

export default App;
