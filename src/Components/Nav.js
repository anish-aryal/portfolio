import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-black sticky-top">
      <div className="container sticky-top ">
        <Link className="navbar-brand text-white" to="#">
          Anish Aryal
        </Link>{" "}
        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2  mb-lg-0">
            <li className="nav-item text-light">
              <Link className="nav-link active text-light" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item text-light">
              <Link className="nav-link text-light" to="#">
                Link
              </Link>
            </li>
            <li className="nav-item text-light dropdown">
              <Link
                className="nav-link dropdown-toggle text-light"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu text-light">
                <li className="text-light">
                  <Link className="dropdown-item " to="#">
                    Action
                  </Link>
                </li>
                <li className="text-white">
                  <Link className="dropdown-item " to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className=" text-light">
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled text-light" aria-disabled="true" to="#">
                Disabled
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
