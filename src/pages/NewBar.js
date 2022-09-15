import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 250px;
    max-width: 50vw;
    align-items: baseline;
    div input {
        margin-right: 25px;
    }
`

const NewBar = ({addBar}) => {

    const initialState = {
        bar_name:'',
        photo_url: '',
        address:'',
        city:'',
        state:'',
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
        axios.post('http://localhost:8000/bars/', formData )
        .then(res =>  {
            setFormData(initialState)
            addBar(res.data)
            navigate('/bars', { replace: true })
        })

    }

  return (
      <StyledForm onSubmit={handleSubmit}>
        <h1> Create new Item</h1>
            <div>
                <label htmlFor='bar_name'>Bar Name</label>
                <input id='bar_name' name='name' type='text' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='photo_url'>Photo</label>
                <input id='photo_url' name='type' type='text' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='address'>Address</label>
                <input id='address' name='type' type='text'  onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <input id='city' name='type' type='text'  onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='state'>State</label>
                <input id='state' name='type' type='text'  onChange={handleChange}/>
            </div>
            <input type='submit' value='Create Item' />
    </StyledForm>
  )
}

export default NewBar