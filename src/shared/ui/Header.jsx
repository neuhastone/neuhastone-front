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
                        className={styles.Button} 
                        onClick={button.onClick} // button의 onClick을 사용
                    >
                        {button.label} // button의 label을 사용
                    </Button>
                ))}
            </div>
        </header>
    );
};

export default Header;
