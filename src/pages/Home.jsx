import React, { useEffect, useState } from 'react'
import TodoAdd from '../components/TodoAdd'
import TodoList from '../components/TodoList'
import axios from 'axios'

const Home = () => {
    const [todoItems, setTodoItems] = useState([])

    const getTodos = async() => {
        let url = "https://64ae7297c85640541d4d16c2.mockapi.io/api/todo";
        try {
        let {data}  = await axios(url)
        setTodoItems(data)
      
       
        } catch (error) {
            console.log(error);
        }
    }

    
useEffect(() => {
    getTodos()
}, [])

    

  return (
    <div>
        <TodoAdd getTodos={getTodos}/>
        <TodoList todoList={todoItems} getTodos={getTodos} />
    </div>
  )
}

export default Home