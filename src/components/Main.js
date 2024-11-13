import React from 'react';
import Nav from './nav';
import './Main.css';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        
        
          <Sidebar />
        
      </div>

    </div>
  );
};
export default Main;