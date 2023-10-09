import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { useState } from 'react';
import Form from './Form';
import { BrowserRouter as Router, Route, Routes, NavLink, Outlet, useNavigation } from 'react-router-dom';


function App() {

  const genres = ["action", "adventure", "comedy", "drama", "fantasy", "horror", "musical", "mystery", "romance", "science-fiction", "sports", "thriller", "western"];
  const keywords = ["night", "fight", "good", "god", "love", "one", "sex", "secret", "new", "death", "man", "woman", "her", "him", "star", "doctor", "strikes", "show", "play", "girl", "boy", "little", "adventure", "hero", "journey", "epic", "mystery", "romance", "action", "thriller", "suspense", "fantasy", "magic", "war", "sci-fi", "comedy", "drama", "tragedy", "crime", "horror", "legend", "fantasy", "quest", "quest", "legend", "history", "western", "musical", "fantasy", "legend", "time", "space", "future", "past", "present", "battle", "sword", "king", "queen", "prince", "princess", "monster", "zombie", "vampire", "alien", "robot", "detective", "spy", "hero", "villain", "treasure", "curse"];

  return(
  <div className="container py-4">
    <Header />
    <br/>
    <Form genres={genres} keywords={keywords}/>
  </div>
  );
}

function Header() {
  return( 
    <header className="container text-center">
      <div className="col"></div>
      <div className="col h1 text-danger">Cinema Seeker</div>
      <div className="col"></div>
    </header>
  );
}

export default App;