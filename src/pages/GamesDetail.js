import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'







const GamesDetail = ({bars}) => {

    const { id } = useParams()
    const [ bar, setBars ] = useState()
    // const { commentid} = useParams()
    // // Two ways to do it, 1 with props, 2 with a fresh request
    // // First way
   
    // let bar = bars.find( b => b.id === id)
    // console.log(bar.id)
    console.log(bars)
 
    

    useEffect(()=> {
        fetch(`http://localhost:8000/bars/${id}`)
        .then(res => res.json())
        .then(data => setBars(data))
    }, [])
  return (
    <div>

        {bar && (bar.game.map(c=> {
            return (<p className="comment">
            <h3><u>{c.sport}:</u></h3>
            <p><em>{c.gametime}</em></p>
            <p><em>{c.teamOne}</em></p>
            <p><em>{c.teamTwo}</em></p>
            <p><em>{c.timeofpost}</em></p>
            </p>)}))}
    </div>
  )
}

export default GamesDetail