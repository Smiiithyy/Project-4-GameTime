import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'



const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 150px;
    max-width: 50vw;
    align-items: center;
    /* div input {
        margin-right: 25px; */
    /* } */
`

const NewGame = (id) => {

    const initialState = {
        sport:'',
        gametime: '',
        teamOne: '',
        teamTwo: '',
        timeofpost: [],
        bar_id: id.id



    }

    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialState)


    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post(`http://localhost:8000/games/`, formData, {
        } )
        .then(res =>  {
            setFormData(initialState)
            // addComment(res.data)
            navigate('/bars', { replace: true })
        })

    }

  return (

      <StyledForm onSubmit={handleSubmit}>
        <h1> Add New Game Time</h1>
      
            <div>
                <label htmlFor='sport'>Sport</label>
                <input id='sport' name='sport' type='text' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='gametime'>Game time</label>
                <input id='gametime' name='gametime' type='text' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='teamOne'>Team One</label>
                <input id='teamOne' name='teamOne' type='text' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='teamTwo'>Team Two</label>
                <input id='teamTwo' name='teamTwo' type='text' onChange={handleChange}/>
            </div>

            <input className="inputbutton" type='submit' value='Create Item' />
    </StyledForm>


  )
}

export default NewGame