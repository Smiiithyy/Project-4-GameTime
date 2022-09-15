import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import NewComment from './NewComment'



const BarView = ({bars}) => {
    // console.log(bars)
    const { id } = useParams()
    const [ bar, setBar ] = useState()
    // // Two ways to do it, 1 with props, 2 with a fresh request
    // // First way
   
    // let bar = bars.find( b => b.id === id)
    // console.log(bar.id)

    

    useEffect(()=> {
        fetch(`http://localhost:8000/bars/${id}`)
        .then(res => res.json())
        .then(data => setBar(data))
    }, [])



    // console.log(bars)

  return (
    <div>
        {
        bar && (<>
        <h1>{bar.bar_name}</h1>
        <p>{bar.address}</p>
        <p>{bar.city}</p>
        <p>{bar.state}</p> 
        <p>{bar.comments}</p>
        <NewComment id={id} />

        
    
    </>)}
    </div>
  )
}

export default BarView