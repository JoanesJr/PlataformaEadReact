import React from "react";
import style from "./header.module.css";
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
      <header className={style.header}>
        <nav className={style.nav}>
          <div className={style.imgContainer}>
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="
              ReactLogo"
                className={style.img}
              />
            </Link>

            <h2>ReactNavbar</h2>
          </div>
          <div>
            <NavLink to="/aula" className={style.menu}>
              Aula
            </NavLink>
            <NavLink to="/curso" className={style.menu}>
              Cursos
            </NavLink>
            <NavLink to="/" className={style.menu}>
              Registre-se
            </NavLink>
          </div>
        </nav>
      </header>
    );
}

export default Header;