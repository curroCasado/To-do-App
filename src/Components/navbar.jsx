import React from "react";

const Navbar = ({ tasksDone, tasksTodo }) => {
  return (
    <nav className="navbar navbar-light bg-light ">
      <a className="navbar-brand" href="#">
        <h3 className="margin: 100px">List of things to accomplish</h3> To-Do{" "}
        <span className="badge badge-pill badge-secondary m-2">
          {tasksTodo}
        </span>
        Done{" "}
        <span className="badge badge-pill badge-secondary m-2">
          {tasksDone}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
