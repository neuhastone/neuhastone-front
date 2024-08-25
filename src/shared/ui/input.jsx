const Input = ({ type, placeholder, value, onChange, required, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className={className}
        />
    );
};

export default Input;