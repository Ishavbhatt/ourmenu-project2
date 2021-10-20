import React, { useState } from 'react';
import './App.css';
import items from "./data"

function App() {

  const [menuItems, setMenuitems] = useState(items);
  const [catagories, setCatogories] = useState([]);
  return (
  <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
    
    </section>
  </main>
  );
}

export default App;
