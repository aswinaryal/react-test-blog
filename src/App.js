import React from 'react';
import './App.css';
import Header from './layout/header';
import Navbar from './layout/navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar title = "React Blog" />
    </div>
  );
}

export default App;
