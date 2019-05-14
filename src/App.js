import React from 'react';
import './App.css';
import Header from './layout/header';
import Navbar from './layout/navbar';
import Body from './layout/body';
import Footer from './layout/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar title = "React Blog" />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
