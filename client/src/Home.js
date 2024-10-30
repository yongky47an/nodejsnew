import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apiCall = () => {
    axios.get('http://127.0.0.1:5000/get_users').then((data) => {
      
    })
  }

 // const [name, ] = useState("");

function Home() {
    return (
        

        <div className='App-header'>
         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <h1>
         
        </h1>
        <div className="card">
         
          <h2>Sign In</h2>
          <header className="App-header">

            <button onClick={apiCall}>Make API Call</button>

            </header>

            <form>
      <label>Enter your name:
        <input
          type="text" 
        />
      </label>
    </form>
        </div>
      </div>

      );
}

export default Home;