import React from "react";

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <i
                className="fa fa-shopping-cart fa-lg m-2"
                aria-hidden="true"
              ></i>
              <span className="badge badge-pill m-2 bg-info">
                {props.count.filter((counter) => counter.value > 0).length}
              </span>
              Items
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
