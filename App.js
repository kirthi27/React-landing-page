import React from 'react';
// import Home from './Components/Home';
import './App.css';
import Navbar from './Components/navbar';
import Carosul from './Components/carousel';
import Cards from './Components/cards';


function App() {
  return (
    <div>
      {/* <Home /> */}
      <Navbar />
       <Carosul />
       &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <Cards />
   </div>
  );
}

export default App;
