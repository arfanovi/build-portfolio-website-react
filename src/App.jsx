import React from 'react';
import "./App.css"
import { Outlet } from 'react-router-dom';
import Aside from './Components/Aside';
import Navbar from './Components/Navbar';
const App = () => {
  return (
    <>
    <Aside></Aside>
    <div className='main-content'>
      <nav>Navbar</nav>
      <Navbar></Navbar>
      <section style={{
        scrollBehavior: "smooth"
      }}>
        <Outlet></Outlet>
      </section>

    </div>
    
    </>
  );
};

export default App;
