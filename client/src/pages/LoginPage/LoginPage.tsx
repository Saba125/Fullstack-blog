import styles from "@/pages/LoginPage/LoginPage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "@/types";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/login",
        formData,
        {
          withCredentials: true,
        }
      );
      const data = res.data;
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      toast.error("Username or password is incorrect");
    }
  };

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
        <h3 className={styles.title}>Sign in here </h3>
        <div className={styles.box}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.username}>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter name here"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 4,
                    message: "Username must be at least 4 characters",
                  },
                })}
              />
              {errors.username && (
                <span className={styles.error}>{errors.username.message}</span>
              )}
            </div>
            <div className={styles.password}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password here"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <span className={styles.error}>{errors.password.message}</span>
              )}
            </div>
            <div className={styles.button}>
              <button type="submit">Submit</button>
            </div>
            <div className={styles.footer}>
              First time here?
              <Link to="/register">Click here to sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
