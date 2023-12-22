import styles from "@/pages/RegisterPage/Register.module.css";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";
const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8800/api/register", {username, password})
      console.log('User registered')
      toast.success("User has registered successfully")
    } catch (error) {
      console.log("error registering" + error)
      toast.error("Could not register user")
    }
  }
  return (
    <div className="container">
       <Toaster
        duration={3000}
        visibleToasts={1}
        expand={false}
        richColors
        position="bottom-right"
      />
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Sign up here </h3>
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
              <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Enter password here" />
            </div>
            <div className={styles.button}>
              <button type="submit">Submit</button>
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
