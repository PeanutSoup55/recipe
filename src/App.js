import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import './App.css';  // Basic styling file

const App = () => {
  return (
    <div className="app">
      <Nav />
    </div>
  )
};

export default App;
