import React from 'react'


const BarLists = ({bars}) => {
    console.log(bars)
  return (
    <div>BarLists
        {bars && (bars.map(bar => {
            return (<p>
                <img src = {bar.photo_url} alt="img"></img>
                <h4><a href={`/bar/${bar.id}`}>{bar.bar_name}</a></h4>
                </p>)}))}
    </div>
  )
}

export default BarLists