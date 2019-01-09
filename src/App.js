import React, { Component } from 'react';
import './App.css';
import Employees from './employees/employees'
import Navigation from './navigation/navigation'

class App extends Component {
  render() {
    return (
     <div className="app">
        <div className="header">
        <div className="container">
        <Navigation/>
        </div>
    </div>
    <div className="row mt-4">
         <div className="container">
         <Employees/>
         </div>
      </div>
     </div>

    );
  }
}

export default App;
