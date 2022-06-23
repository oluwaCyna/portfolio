import React from 'react'
import { NavLink } from "react-router-dom";

const NavBar = () => {

    let passiveClassName = "nav-link px-5";
      let activeClassName = "nav-link px-5 active";
    
      return (
          <nav className="nav nav-pills d-flex justify-content-center py-3">
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? activeClassName : passiveClassName
                }
              >
                Home
              </NavLink>
              <NavLink
                to="Skills"
                className={({ isActive }) =>
                  isActive ? activeClassName : passiveClassName
                }
              >
                Skills
              </NavLink>
              <NavLink
                to="Portfolio"
                className={({ isActive }) =>
                  isActive ? activeClassName : passiveClassName
                }
              >
                Portfolio
              </NavLink>
              <NavLink
                to="CV"
                className={({ isActive }) =>
                  isActive ? activeClassName : passiveClassName
                }
              >
                CV
              </NavLink>
          </nav>
      );

}

export default NavBar