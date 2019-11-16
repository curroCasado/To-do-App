import React, { Component } from "react";

import Task from "./task";

class List extends Component {
  render() {
    const { onSelected, tasks, onClean, onAdd, onText } = this.props;

    return (
      <div>
        <div className="input-group w-50">
          <input
            type="text"
            class="form-control"
            placeholder="Task to complete"
            onChange={onText}
          ></input>
          <div class="input-group-append" id="button-addon4">
            <button onClick={onAdd} class="btn btn-primary" type="button">
              Add
            </button>
            <button onClick={onClean} class="btn btn-info" type="button">
              Clean
            </button>
          </div>
        </div>
        {tasks.map(task => (
          <Task key={task.id} task={task} onSelected={onSelected} />
        ))}
      </div>
    );
  }
}
export default List;
