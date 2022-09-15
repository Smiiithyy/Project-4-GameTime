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
      <header className="App-header">
      <Routes>
        <Route path ="/bars" element = {<BarLists bars={bars} />} />
        <Route path ="/bar/new" element = {<NewBar addBar = {addBar}/>} />
        <Route path = "/comments/edit/:id" element = {<CommentEdit setComment = {setComments}/>} ></Route>
        <Route path="/bar/:id" element={<BarView bars = {bars}/>}/>

        {/* <Route path = "/bars/:id/" element ={<BarDetails bars={bars} setBars={setBars} />} /> */}
      </Routes>
      
      </header>
    </div>
  );
}

export default App;
