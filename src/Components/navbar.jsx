import React from "react";

const Navbar = ({ tasksDone, tasksTodo }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {" "}
        To-Do{" "}
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
