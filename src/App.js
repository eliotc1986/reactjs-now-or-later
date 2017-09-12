import React, { Component } from 'react';
import _ from 'lodash';

// Import assets
import logo from './logo.svg';
import './App.css';

// Components
import TodoList from './components/TodoList';
import CreateToDo from './components/CreateToDo';

// HARDCODED DATA
const todos = [
{
  task: "Learn React.js",
  description: "I need a ticket now",
  isCompleted: false
},
{
  task: "Make Angular Reactive",
  description: "Learn sooner rather than later",
  isCompleted: false
}
];

// APP DEFINITION
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Now or Later</h2>
          <p>a simple todo app built with React.js</p>
        </div>
        <div className="app-body">
          <h3>Open Tasks</h3>
          <CreateToDo todos={this.state.todos} createTask={this.createTask.bind(this)} />
          <TodoList
            todos={this.state.todos}
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
          />
        </div>
      </div>
    );
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);

    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }
}

export default App;
