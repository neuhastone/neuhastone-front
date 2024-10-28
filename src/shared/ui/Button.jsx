// Button.js
import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, variant = "primary", onClick }) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
            {label} {/* label을 직접 사용 */}
        </button>
    );
};

export default Button;


