import React from 'react';

function Todo(props) {
  const todo = props.data;

  return (
    <div className="column is-4">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{todo.title}</p>
        </header>
        <div className="card-content">
          {todo.description}
          <br/>
          <small>Creato in data {new Date(todo.date).toLocaleDateString()}</small>
        </div>
        <footer className="card-footer">
          <a href="#/" className="card-footer-item" onClick={() => props.handleRemove(todo)}>Elimina</a>
        </footer>
      </div>
    </div>
  )
}

export default Todo;