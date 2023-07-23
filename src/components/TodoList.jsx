import axios from "axios";
import React, { useState } from "react";
import TodoEdit from "./TodoEdit";

const TodoList = ({ todoList, getTodos }) => {
    console.log(todoList)
    const [toBeEdited, setToBeEdited] = useState("")
  // const {todoList} = props

  const handleDelete = async (id) => {
    let url = `https://64ae7297c85640541d4d16c2.mockapi.io/api/todo/${id}`;
    try {
      await axios.delete(url);
    } catch (error) {
      console.log(error);
    }
    getTodos();
  };

  const handleEdit = async(id, editedTodo, editedDescription ) => {
    let url = `https://64ae7297c85640541d4d16c2.mockapi.io/api/todo/${id}`
    try {
        await axios.put(url,{todo:editedTodo, descr:editedDescription})
    } catch (error) {
        console.log(error);
    }
    getTodos()
  }

  return (
    <div className="container w-50 mt-4">
      <h1 className="text-danger text-center">Todo List</h1>
      {todoList.map((item) => {
        const { todo, id, descr } = item;
        return (
          <div key={id} className="row bg-success-subtle m-0 mb-2  p-2">
            <div className="col-10">
              <span className="m-0">{todo}</span>  <span className="m-0">{descr}</span>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <i 
              data-bs-toggle="modal" 
              data-bs-target="#edit-modal"
              onClick={()=>setToBeEdited(item)}
              className="fa-regular fa-pen-to-square me-3"></i>
              <i
                onClick={() => handleDelete(id)}
                className="fa-solid fa-trash"
              ></i>
            </div>
          </div>
        );
      })}
      <TodoEdit toBeEdited={toBeEdited} handleEdit={handleEdit} />
    </div>
  );
};

export default TodoList;
