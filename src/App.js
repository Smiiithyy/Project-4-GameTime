import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
// import axios from 'axios'
import BarLists from './pages/BarLists';
import NewBar from './pages/NewBar';
import CommentEdit from './pages/CommentEdit';
import BarView from './pages/BarDetail';
import Home from './pages/Home';
import GameDetails from './pages/GamesDetail'





function App() {

  const [bars, setBars] = useState([])
  const [comments, setComments] =useState([])

  useEffect(() => {
    fetch('http://localhost:8000/bars/')
    .then(res => res.json())
    .then (items => setBars(items))
  }, [])



  console.log(bars)

  const addBar = (bar) =>
  setBars([...bars, bar])

  const updateCommentState = (id) => {

    setComments(comments.filter(comment => comment._id !== id))

}

  return (
    <div className="App">
      <div className="border">
      <header className="App-header">
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path ="/bars" element = {<BarLists bars={bars} />} />
        <Route path ="/bar/new" element = {<NewBar addBar = {addBar}/>} />
        <Route path = "/comments/:id" element = {<CommentEdit setComment = {setComments} updateCommentState = {updateCommentState} bars={bars}/>} ></Route>
        <Route path="/bar/:id" element={<BarView bars = {bars}/>}/>
        <Route path ="/games/" element={<GameDetails bars={bars}/>}/>
        {/* <Route path ="/games/" element={<GameDetails bars={bars}/>}/> */}

        {/* <Route path = "/bars/:id/" element ={<BarDetails bars={bars} setBars={setBars} />} /> */}
      </Routes>
      
      </header>
      </div>
    </div>
  );
}

export default App;
