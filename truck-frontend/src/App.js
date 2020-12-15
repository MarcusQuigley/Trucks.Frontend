import './App.css';
import React from 'react';
import {BrowserRouter ,Route, Link} from 'react-router-dom';

import TruckPage from './Pages/TruckPage';
import HomePage from './Pages/HomePage';

 
  

function App() {
  const openMenu = function openMenu(){
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu= function closeMenu(){
    document.querySelector(".sidebar").classList.remove("open");
  }
  
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header"> 
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">Trucks</Link>
 
        </div>
        <div className="header-links">
            <a href="cart.html" >Cart</a>
            <a href="signin.html" >signin</a>
        </div>
    </header>
    
    <aside className="sidebar">
        <h3>Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="">1980's Trucks</a>
            </li>
            <li>
                <a href="">1990's Trucks</a>
            </li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
          <Route path="/trucks/:id" component={TruckPage} />
          <Route path="/"  component={HomePage} exact/>
        </div>
      
    </main>
    <footer className="footer">
        all shites reserved!!
    </footer>
</div>
</BrowserRouter>
  );
}



export default App;
