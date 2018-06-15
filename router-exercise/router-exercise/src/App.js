import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'
import Home from './Home'
import Atlanta from './Atlanta'
import About from './About'
import Images from './Images'
import MayorMessage from './MayorMessage'


var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-s/01/39/f5/18/the-soccer-fields-with.jpg'                       
]

class App extends Component {
  render() {
     
    return (
    <Router>
      <div>
        <BootstrapNavBar />
       
        <div className="container main">
          <h1>Main App</h1>
         
        </div>
        <Route path="/home" render={Home}/>
        <Route  path="/images" render={()=><Images atlImages={atlImages}/>} />
        <Route  path="/atlanta" component={Atlanta} />
        <Route  path="/about" component={About} />
         <Route  path="/mayor" component={MayorMessage} />
      </div>
    </Router>
    );


  }
}

export default App;
