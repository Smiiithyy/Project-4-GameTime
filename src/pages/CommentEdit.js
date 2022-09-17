import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Button from 'react-bootstrap/Button'
import { Modal } from 'bootstrap'



const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-self: start;

`

const CommentEdit = ({ setComment, updateCommentState }) => {
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
        console.log(id)
        axios.put(`http://localhost:8000/comments/${id}`, formData, {
        headers: {
        "Content-Type" : "multipart/form-data" 
    },
})
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

    const deleteComment = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8000/comments/${id}`)
        .then(res => {
            console.log(res)
            updateCommentState(id)
        
        })
        navigate('/bars', { replace: true })
    }





  return (

<div>
<NavBar/>
       <h1 className="header">Edit or Delete Comment</h1>   

        <StyledForm onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name: </label>
                <input id='name' name='name' type='text' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='comment'>Comment: </label>
                <input id='comment' name='comment' type='text' onChange={handleChange} />
            </div>
            <div className="buttons">
            <Button variant="primary" type='submit' value='Edit Item'>EDIT</Button>
            <Button variant="danger" onClick = {() => deleteComment(id)}>DELETE</Button>
            </div>
        </StyledForm>



        

</div>
  )
}

export default CommentEdit