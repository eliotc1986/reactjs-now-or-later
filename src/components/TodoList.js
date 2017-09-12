import React, { Component } from 'react';
import _ from 'lodash';

// Components
import TodoListItem from './TodoListItem';

// TODO LIST CLASS
class TodoList extends Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} {...props}  />);
  }

  render() {
    return (
      <div className="todo-list-wrapper">
        <ul className="todo-list">
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}

export default TodoList;
