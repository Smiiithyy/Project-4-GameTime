import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`

const CommentEdit = ({ setComment }) => {
    let { id } = useParams()
    let navigate = useNavigate()
    
    const initialState = {
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.put(`http://localhost:8000/comments/${id}`, formData )
        .then(res =>  {

            setFormData(initialState)
            setComment(res.data)
            navigate('/bars', { replace: true })
        })

    }

    useEffect(()=> {
        axios.get(`http://localhost:8000/comments/${id}`)
        .then(res => {
            setFormData(res.data)
        })
    }, [])



  return (


        <StyledForm onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' name='name' type='text' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='comment'>Comment</label>
                <input id='comment' name='comment' type='text' onChange={handleChange} />
            </div>
            <input type='submit' value='Edit Item' />
            
        </StyledForm>
  )
}

export default CommentEdit