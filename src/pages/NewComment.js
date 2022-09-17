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

const NewComment = (id) => {

    const initialState = {
        name:'',
        comment: '',
        bar_id: id.id,
        image: [],


    }

    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialState)


    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleImage = (e) => {
        console.log(formData)
        setFormData({...formData, [e.target.id]: e.target.files[0]})
        console.log(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post(`http://localhost:8000/comments/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        } )
        .then(res =>  {
            setFormData(initialState)
            // addComment(res.data)
            navigate('/bars', { replace: true })
        })

    }

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
            <div>
                <label htmlFor='image'>Image</label>
                <input id='image' name='image' type='file' onChange={handleImage}/>
            </div>
            <input className="inputbutton" type='submit' value='Create Item' />
    </StyledForm>


  )
}

export default NewComment