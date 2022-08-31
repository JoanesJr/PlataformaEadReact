import React from "react";
import style from './button.module.css';

const Button = ({text}) => {
    return (
        <button className={style.btn}>{text}</button>
    );
}


export default Button




