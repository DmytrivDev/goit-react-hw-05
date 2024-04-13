import { NavLink } from "react-router-dom";

import css from "./Navigation.module.scss";

function Navigation() {

  return (
    <div className={css.header}>
      <div className="container">
        <nav className={css.header__nav}>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/movies" >Movies</NavLink>
        </nav>
      </div>
    </div> 
  );
}

export default Navigation;
