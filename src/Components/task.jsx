import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <div className="m-2">
        <span className=" m-3">{this.props.task.label}</span>
        <button
          onClick={() => this.props.onSelected(this.props.task)}
          className={this.getButtonClasses()}
        >
          Done
        </button>
      </div>
    );
  }

  getButtonClasses() {
    let classes = "btn btn-sm btn-";
    classes += this.props.task.selected === true ? "success" : "secondary";
    return classes;
  }
}

export default Task;
