// Header.jsx
import React from 'react';
import Button from '@shared/ui/Button';
import styles from './Header.module.css';

const Header = ({ title, buttons }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <div className={styles.buttonContainer}>
                {buttons.map((button, index) => (
                    <Button 
                        key={index} 
                        label={button.label} // label을 props로 전달
                        onClick={button.onClick} 
                        variant={button.variant} // variant prop 전달
                    />
                ))}
            </div>
        </header>
    );
};

export default Header;
