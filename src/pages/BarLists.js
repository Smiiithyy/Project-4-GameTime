import React from 'react'
import NavBar from '../components/NavBar'

const BarLists = ({bars}) => {
    console.log(bars)
  return (
    <div>
        <NavBar/>
        <h1>Game Time</h1>
        {bars && (bars.map(bar => {
            return (<p>
                <img className="bar-image" src = {bar.photo_url} alt="img" ></img>
                <h4><a href={`/bar/${bar.id}`} text-decorations="none">{bar.bar_name}</a></h4>
                </p>)}))}
    </div>
  )
}

export default BarLists