import React, { Component } from 'react';

// TODO LIST ITEM CLASS
class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <span className="item-actions">
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </span>
      );
    }

    return (
      <span className="item-actions">
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </span>
    );
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;

    if (this.state.isEditing) {
      return (
        <div>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </div>
      );
    }

    return (
      <span className={'item-title ' + (isCompleted ? 'task-completed' : '')}
          onClick={this.props.toggleTask.bind(this, task)}
      >
        {task}
      </span>
    );
  }

  render() {
    return (
      <li className="todo-list-item">
        {this.renderTaskSection()}
        {this.renderActionSection()}
      </li>
    );
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }

  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;

    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false })
  }
}

export default TodoListItem;
