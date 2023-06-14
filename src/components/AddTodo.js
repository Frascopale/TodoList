import React from 'react';

function AddTodo(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="field">
        <label className={`label`}>Titolo</label>
        <div className="control">
          <input
            type="text"
            value={props.data.title}
            className="input"
            name="title"
            placeholder="es. Fare la spesa"
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className={`label`}>Descrizione</label>
        <div className="control">
          <input
            type="text"
            value={props.data.description}
            className="input"
            name="description"
            placeholder="es. comprare pane e uova"
            onChange={props.handleChange}
          />
        </div>
      </div>
      <button type="submit" className="button is-success">Aggiungi</button>
    </form>
  )
}

export default AddTodo;