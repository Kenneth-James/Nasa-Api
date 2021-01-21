import React from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Nasa from './components/Nasa';
import About from './components/About';
import NavBar from './components/Navbar';
import './App.css';



//
//API KEY - InOwLJHZ1riMFGzBLfrgJux7ysVsaRuNTFX4vjCf

//const NASA_URL = https://api.nasa.gov/planetary/apod?api_key=InOwLJHZ1riMFGzBLfrgJux7ysVsaRuNTFX4vjCf

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div>
          <Route component={ Home } path='/' exact />
          <Route component={ About } path='/about' />
          <Route component={ Nasa } path='/nasapic' />
      </div>
      </Router>
    ) 
  }
 
}

export default App;



