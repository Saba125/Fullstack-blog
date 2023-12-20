import styles from "@/pages/RegisterPage/Register.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Sign up here </h3>
        <div className={styles.box}>
          <form className={styles.form}>
            <div>
              <label>Username</label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Enter name here"
              />
            </div>
            <div>
              <label>Password</label>
              <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Enter password here" />
            </div>
            <div className={styles.button}>
              <button>Submit</button>
            </div>
            <div className={styles.footer}>
              Already registered?
              <Link to="/login">Click here to log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
