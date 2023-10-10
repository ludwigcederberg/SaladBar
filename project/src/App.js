import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { useState } from 'react';
import Form from './Form';
import { BrowserRouter as Router, Route, Routes, NavLink, Outlet, useNavigation } from 'react-router-dom';


function App() {
  

  const genres = ["action", "adventure", "comedy", "drama", "fantasy", "horror", "musical", "mystery", "romance", "science-fiction", "sports", "thriller", "western"];
  const tempkeywords = [
    "night", "fight", "good", "god", "love", "one", "sex", "secret", "new", "death", 
    "man", "woman", "her", "him", "star", "doctor", "strikes", "show", "play", "girl", 
    "boy", "little", "adventure", "hero", "journey", "epic", "mystery", "romance", 
    "action", "thriller", "suspense", "magic", "war", "sci-fi", "comedy", "drama", 
    "tragedy", "crime", "horror", "legend", "quest", "history", "western", "musical", 
    "fantasy", "time", "space", "future", "past", "present", "battle", "sword", 
    "king", "queen", "prince", "princess", "monster", "zombie", "vampire", "alien", 
    "robot", "detective", "spy", "villain", "treasure", "curse", "when", "your", "can", 
    "said", "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", 
    "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", 
    "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", 
    "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", 
    "my", "than", "first", "water", "been", "call", "who", "oil", "its", "now", "find", 
    "long", "down", "day", "did", "get", "come", "made", "may", "part", "over", "new", 
    "sound", "take", "only", "little", "work", "know", "place", "year", "live", "me", 
    "back", "give", "most", "very", "after", "thing", "our", "just", "name", "good", 
    "sentence", "man", "think", "say", "great", "where", "help", "through", "much", 
    "before", "line", "right", "too", "means", "old", "any", "same", "tell", "boy", 
    "follow", "came", "want", "show", "also", "around", "form", "three", "small", 
    "set", "put", "end", "does", "another", "well", "large", "must", "big", "even", 
    "such", "because", "turn", "here", "why", "ask", "men", "change", "went", "light", 
    "kind", "off", "need", "house", "picture", "try", "us", "again", "animal", "point", 
    "mother", "world", "near", "build", "self", "earth", "father", "head", "stand", 
    "own", "page", "should", "country", "found", "answer", "school", "grow", "study", 
    "still", "learn", "plant", "cover", "food", "sun", "four", "between", "state", 
    "keep", "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm", 
    "hard", "start", "might", "story", "saw", "far", "sea", "draw", "left", "late", "run", 
    "don't"
  ];
  
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