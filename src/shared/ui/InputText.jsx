import React from 'react';
import styles from './Input.text.module.css'; // CSS 모듈을 임포트

const InputText = ({ type, placeholder, value, onChange, required, className, title }) => {
    return (
        <div className={styles.inputGroup}>
            {title && <div className={styles.inputTitle}>{title}</div>}  {/* title이 있을 때만 출력 */}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={`${styles.input} ${className}`}  /* CSS 모듈 클래스 사용 */
            />
        </div>
    );
};

export default InputText;
