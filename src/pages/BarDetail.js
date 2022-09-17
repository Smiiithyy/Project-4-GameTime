import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import NewComment from './NewComment'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import NavBar from '../components/NavBar'
import NewGame from './NewGame';
import GamesDetail from './GamesDetail';




const BarView = ({bars}) => {
    // console.log(bars)
    const { id } = useParams()
    const [ bar, setBar ] = useState()
    // const { commentid} = useParams()
    // // Two ways to do it, 1 with props, 2 with a fresh request
    // // First way
   
    // let bar = bars.find( b => b.id === id)
    // console.log(bar.id)
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    

    useEffect(()=> {
        fetch(`http://localhost:8000/bars/${id}`)
        .then(res => res.json())
        .then(data => setBar(data))
    }, [])


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    let subtitle2;
    const [modal2IsOpen, set2IsOpen] = React.useState(false);
  
    function openModal2() {
      set2IsOpen(true);
    }
  
    function afterOpenModal2() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal2() {
      set2IsOpen(false);
    }

 



    // console.log(bars)

  return (
    
    <div>





        
        <NavBar/>


    
        {
        bar && (<>
        <h1 className ="BarName">{bar.bar_name}</h1>
        <p>{bar.address}</p>
        <p>{bar.city}</p>
        <p>{bar.state}</p> 
        <p>{bar.comments}</p>
    
   
        <Button className ="button" onClick={openModal}>Add Comment</Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <NewComment id={id} />

      </Modal>

      <br></br>


      

     

     
      
      <div class="space">

        {bar && (bar.comment.map(c=> {
            return (<p className="comment">
            <h3><u>{c.name}:</u></h3>
            <p><em>{c.comment}</em></p>
            <p><img className="thumbnail" src={`https://res.cloudinary.com/dt6p5s1vi/${c.image}`} alt="placeholder"/></p>
            <Button variant="outline-secondary"><a href={`http://localhost:3000/comments/${c.id}`}>Edit</a></Button>
            </p>)}))}

    </div>
    <Button onClick={openModal2}>Game Times</Button><Modal
        isOpen={modal2IsOpen}
        onAfterOpen={afterOpenModal2}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal2}>close</button>
        <GamesDetail id={id}></GamesDetail>
        <NewGame id={id}></NewGame>

      </Modal>
    </>)}
    </div>
  )
}

export default BarView