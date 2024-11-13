import React from 'react';
import Nav from './nav';
import './Main.css';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        
        <div className='sidebar'>
          <h1>Recipes</h1>
          <Sidebar />
        </div>
      </div>

    </div>
  );
};
export default Main;