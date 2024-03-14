import React from 'react';
import './App.css'; 
import Nav from './screens/Nav';
import Footer from './screens/Footer';
import DynamicsStream from './screens/DynamicsStream';
import '@fortawesome/fontawesome-free/css/all.css';



function App() {
  return (
    <div className="App">
      <Nav />
      <DynamicsStream />
      <Footer />
    </div>
  );
}

export default App;
