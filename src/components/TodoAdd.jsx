import React, { useState } from 'react'
import axios from 'axios'

const TodoAdd = ({getTodos}) => {

    const [newTodo, setNewTodo] = useState({
        newAddedTodo:"",
        description:""
    })

    const handleChange = (e) => {
        setNewTodo({...newTodo, [e.target.id]:e.target.value })
       
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        let url = "https://64ae7297c85640541d4d16c2.mockapi.io/api/todo";
        try {
            await axios.post(url, {"todo":newTodo.newAddedTodo, "descr":newTodo.description})
        } catch (error) {
            console.log(error);
        }
        getTodos()
        setNewTodo({
            newAddedTodo:"",
            description:""
        })

    }
  return (
    <div className='container w-50 mt-5'>
        <h1 className='text-danger text-center'>Todo App</h1>
        <form onSubmit={handleSubmit} className='form-control d-flex justify-content-center p-3 bg-info-subtle'>
            <input id='newAddedTodo' type="text" onChange={handleChange} value={newTodo.newAddedTodo} className='form-control w-75 me-3' />
            <input id='description' type="text" onChange={handleChange} value={newTodo.description} className='form-control w-75 me-3' />

            <button type='submit' className='btn btn-danger' >Add Todo</button>
        </form>
    </div>
  )
}

export default TodoAdd