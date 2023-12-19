import styles from "@/pages/LoginPage.module.css";
const LoginPage = () => {
  return (
    <div className="container">
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Sign in here   </h3>
            <div className={styles.box}>
                <form className={styles.form}>
                    <div>
                        <label>Username</label>
                        <input type="text" placeholder="Enter name here" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="Enter password here" />
                    </div>
                    <div className={styles.button}>
                        <button>Submit</button>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
  );
};

export default LoginPage;
