
import React from 'react'
import profile from './images/djay.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img className="profile-pic" src={profile} alt='pic'/>
        <div className="info">
          <h1 className="name">Jaylson Almeida</h1>
          <h2>FrontEnd Developer</h2>
          <h4>j.almeidacv@gmail.com</h4>
          <div className="btn-container">
           <button className="btn1">Email</button>
           <button className="btn2">LinkedIn</button>
          </div>
          <main className="main-conteiner" >
            <h2 >About</h2>
            <p>I'm 29 years old trying my best to serve the world better, 
              right now teaching myself to program, slow but steady steps 
              to change my career and my life for the better.Already know 
              about the basics of HTML, CSS, JAVASCRIPT, PYTHON, REACT, and SQL.
              </p>
              <h2>Interests</h2>
              <p>Food,Technology,Gaming,Anime,Music,Internet Enthusiast</p>

          </main>
        </div>
      
      
      
    </div>
  );
}

export default App;
