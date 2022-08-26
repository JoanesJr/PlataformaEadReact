import React from "react";
import style from "./header.module.css";

const Header = () => {
    return (
      <header className={style.header}>
        <nav>
          <div className={style.imgContainer}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="ReactLogo" className={style.img}
            />

            <h2>ReactNavbar</h2>
          </div>
        </nav>
      </header>
    );
}

export default Header;