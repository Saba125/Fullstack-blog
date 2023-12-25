import styles from "@/pages/RegisterPage/Register.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "@/types";
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/register",
        formData
      );
      toast.success("User has registered successfully");
    } catch (error) {
      toast.error("Could not register user");
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
        <h3 className={styles.title}>Sign up here </h3>
        <div className={styles.box}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.userGroup}>
              <label>Username</label>
              <input
                type="text"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 4,
                    message: "Username must be at least 4 characters",
                  },
                })}
                placeholder="Enter name here"
              />
              {errors.username && (
                <span className={styles.error}>
                  {" "}
                  {errors.username.message}{" "}
                </span>
              )}
            </div>
            <div className={styles.passGroup}>
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
