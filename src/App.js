import React, { Component } from "react";
import List from "./Components/list";
import NavBar from "./Components/navbar";
import "./App.css";

class App extends Component {
  state = {
    tasks: [],
    newText: ""
  };
  handleText = event => {
    const newText = event.target.value;
    this.setState({ newText });
  };
  handleSelected = task => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index] = { ...task };
    tasks[index].selected = task.selected === true ? false : true;

    this.setState({ tasks });
  };
  handleAdd = () => {
    let tasks = [...this.state.tasks];
    const index = tasks.length + 1;
    tasks.push({ id: index, selected: false, label: this.state.newText });

    this.state.newText !== "" && this.setState({ tasks });
  };
  handleClean = () => {
    let tasks = this.state.tasks.filter(c => c.selected !== true);
    let index = 1;
    tasks = tasks.map(c => {
      c.id = index++;
      return c;
    });
    this.setState({ tasks });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          tasksDone={this.state.tasks.filter(c => c.selected === true).length}
          tasksTodo={this.state.tasks.filter(c => c.selected === false).length}
        />
        <main className="container">
          {" "}
          <List
            tasks={this.state.tasks}
            onSelected={this.handleSelected}
            onClean={this.handleClean}
            onAdd={this.handleAdd}
            onText={this.handleText}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
