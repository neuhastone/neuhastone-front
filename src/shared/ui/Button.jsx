// Button.js
import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, variant = "primary", onClick }) => {
    return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
        {label}
    </button>
    );
};

export default Button;

// App.js
// import React from "react";
// import Button from "./Button";

// function App() {
//   return (
//     <div style={{ display: "flex", gap: "10px" }}>
//       <Button label="primary" variant="primary" onClick={() => console.log("Primary button clicked!")} />
//       <Button label="secondary" variant="secondary" onClick={() => console.log("Secondary button clicked!")} />
//     </div>
//   );
// }

// export default App;
