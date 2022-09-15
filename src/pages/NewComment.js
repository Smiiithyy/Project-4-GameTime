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

const NewComment = (id) => {

    const initialState = {
        name:'',
        comment: '',
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
        axios.post(`http://localhost:8000/comments/`, formData )
        .then(res =>  {
            setFormData(initialState)
            // addComment(res.data)
            navigate('/bars', { replace: true })
        })

    }
console.log(id)
  return (
      <StyledForm onSubmit={handleSubmit}>
        <h1> Create new Item</h1>
        <div>
                
                <input id='' name='bar_id' type='hidden' value={id.id} />
            </div>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' name='name' type='text' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='comment'>Comment</label>
                <input id='comment' name='comment' type='text' onChange={handleChange}/>
            </div>
            <input type='submit' value='Create Item' />
    </StyledForm>
  )
}

export default NewComment