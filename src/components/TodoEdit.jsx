import React, { useEffect, useState } from "react";

const TodoEdit = ({handleEdit, toBeEdited}) => {
  console.log(toBeEdited);
  const {todo, id, descr} = toBeEdited;
  const [editedTodo, setEditedTodo] = useState({
    newEditedTodo:todo,
    description:descr
  })

  const handleChange = (e) => {
    setEditedTodo({...editedTodo, [e.target.id]:e.target.value})
  }

  const handleSubmit = () => {
    handleEdit(id,editedTodo.newEditedTodo, editedTodo.description) //! 1.parametre id, 2.si editlenmiş todo
  }

  useEffect(() => {
    setEditedTodo({...editedTodo,newEditedTodo:todo,description:descr })
  }, [todo,descr])
  

  return (
    <div
      className="modal fade"
      id="edit-modal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 text-danger" id="exampleModalLabel">
              Edit Todo
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <label className="form-label  text-danger" htmlFor="newEditedTodo">Todo</label>
            <input type="text" onChange={handleChange} value={editedTodo.newEditedTodo} className="form-control" id="newEditedTodo" />
            <label className="form-label  text-danger" htmlFor="description">Todo</label>
            <input type="text" onChange={handleChange} value={editedTodo.description} className="form-control" id="description" />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" onClick={handleSubmit} data-bs-dismiss="modal" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoEdit;
