import React from 'react';
import Todo from "./Todo";

function TodoList(props) {
  return (
    <div className="columns is-multiline">
      {
        props.data.map(todo =>
          <Todo
            key={todo.id}
            data={todo}
            handleRemove={props.handleRemove}
          />
        )
      }
    </div>
  )
}

export default TodoList;