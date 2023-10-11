import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import tempkeywords from './keywords.js';
import { useState } from 'react';
import Form from './Form';
import { BrowserRouter as Router, Route, Routes, NavLink, Outlet, useNavigation } from 'react-router-dom';


function App() {

  const genres = ["Action", "Adventure", "Comedy", "Documentary", "Drama", "Fantasy", "Horror", "Musical", "Mystery", "Romance", "Sci-Fi", "Sports", "Thriller", "Western"];
  const k = [...new Set(tempkeywords)];
  const keywords = chooseRandomWords(k, 28);

  //swappar ett ord med ett annat random ord för att sen kapa listan vid #numberOfWords
  //detta ger oss unika ord varje gång vi laddar om sidan
  function chooseRandomWords(wordList, numberOfWords) {
    for (let i = wordList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordList[i], wordList[j]] = [wordList[j], wordList[i]];
    }
    return wordList.slice(0, numberOfWords);
  }

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