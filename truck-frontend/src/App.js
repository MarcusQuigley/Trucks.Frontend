import './App.css';
import React from 'react';
import data from './data.js'

function App() {
  const openMenu = function openMenu(){
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu= function closeMenu(){
    document.querySelector(".sidebar").classList.remove("open");
  }
  
  return (
    <div className="grid-container">
    <header className="header"> 
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <a href="index.html" >Trucks</a>
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
            <ul className="trucks">
              {
                data.trucks.map(t=>
              
                <li key={t.Id}>
                    <div className="truck">
                        <img className="truck-img" src={t.ImagePath} alt="truck"/>
                        <div className="truck-name">{t.Name}</div>
                        <div className="truck-year">{t.Year}</div>
                        <div className="truck-price">{t.Price}</div>
                    </div>
                </li>)
               
                }
            </ul>
        </div>
        <ul>
          <li>truck 2</li>
        </ul>
    </main>
    <footer className="footer">
        all shites reserved.
    </footer>
</div>
  );
}



export default App;
