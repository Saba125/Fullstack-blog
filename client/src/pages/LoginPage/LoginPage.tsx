import styles from '@/pages/LoginPage/LoginPage.module.css'
import { FormEvent, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/login", { username, password }, {
        withCredentials: true
      });
      const data = res.data
      localStorage.setItem("user", JSON.stringify(data))
      console.log(data)
    } catch (error) {
      console.log("Could not login" + error);
    }
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Sign in here </h3>
        <div className={styles.box}>
          <form onSubmit={handleSubmit} className={styles.form}>
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
              <input
                type="password"
                placeholder="Enter password here"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.button}>
              <button>Submit</button>
            </div>
            <div className={styles.footer}>
              First time here?
              <Link to='/register'>Click here to sign up</Link>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
