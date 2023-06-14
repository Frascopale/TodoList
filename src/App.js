import React from 'react';

import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import {todos} from "./data/todos";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((prevState) => {
        const theme = {
          ...prevState.theme,
          value: prevState.theme.value === 'dark' ? 'light' : 'dark'
        };

        return {
          theme
        }
      })
    };

    this.state = {
      todos: todos,
      newTodo: {
        id: todos.length + 1,
        title: '',
        description: '',
        date: new Date()
      },
      theme: {
        value: 'light',
        update: this.toggleTheme
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(event) {
    event.persist();
    this.setState((prevState) => {
      const newTodo = {
        ...prevState.newTodo,
        [event.target.name]: event.target.value
      };

      return {
        newTodo
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState((prevState) => {
      const todos = [...prevState.todos, this.state.newTodo];

      return {
        todos
      }
    });

    // Reimpostare il nuovo todo
    this.setState((prevState) => {
      const newTodo = {
        ...prevState.newTodo,
        id: prevState.todos.length + 1, //così dò sicuramente id diversi
        title: '',
        description: ''
      };

      return {
        newTodo
      }
    })
  }

  //cancella todo
  handleRemove(todo) {
    this.setState((prevState) => {
      const newTodos = prevState.todos.filter(item => item.id !== todo.id);

      return {
        todos: newTodos
      }
    })
  }

  render() {
    return (
      <>
        <Navbar />
        <section className="section">
          <TodoList
            data={this.state.todos}
            handleRemove={this.handleRemove}
          />
          <AddTodo
            data={this.state.newTodo}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
      </>
    );
  }
}

export default App;
