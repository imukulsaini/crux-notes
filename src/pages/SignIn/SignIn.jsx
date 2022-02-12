import "./signin.css";
import { useForm } from "react-hook-form";
import { LoadingSpinner } from "../Spinner/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { signInUserWithCredentials } from "../../firebase/firebase.config";
export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const checkautoFill = watch("autoFill");
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (checkautoFill === "yes") {
      setValue("email", process.env.REACT_APP_EMAIL);
      setValue("password", process.env.REACT_APP_PASSWORD);
    } else {
      setValue("email", "");
      setValue("password", "");
    }
  }, [checkautoFill]);

  async function userLogin(data) {
    setLoading("pending");
    const { email, password } = data;
    const response = await signInUserWithCredentials({ email, password });
    if (response && response.errMessage) {
      setLoading("rejected");
      setError(response.errMessage);
    } else {
      setLoading("fulfilled");
      navigate("/home");
    }
  }

  return (
      <div className="sign-in">
        <section className="sign-in__main">
          <div className="sign-in__main-container">
            <div className="sign-in__form">
              <div className="sign-in__main-header">
                <h2 className="sign-in__header-name">Login</h2>
              </div>
              <form
                className="sign-in__form-info"
                onSubmit={handleSubmit(userLogin)}
              >
                <div className="email-info">
                  <label htmlFor="email" className="sign-in-label">
                    Enter your email
                  </label>
                  <input
                    placeholder="johnwick"
                    className="sign-in__input"
                    type="email"
                    id="login-email"
                    {...register("email", {
                      required: "This field is required",
                    })}
                  />
                  {errors.email && (
                    <span className="sign-in__error">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="password-info">
                  <label htmlFor="password" className="sign-in-label">
                    Enter your password
                  </label>

                  <input
                    {...register("password", {
                      required: "This field is required",
                    })}
                    placeholder="**************"
                    className="sign-in__input"
                    type="password"
                    id="login-password"
                  />
                  {errors.password && (
                    <span className="sign-in__error">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                {loading === "rejected" && (
                  <span className="sign-in__error txt-center">{error}</span>
                )}
                <div className="auto-fill__data">
                  <input
                    type="checkbox"
                    name="auto-fill__input"
                    value="yes"
                    {...register("autoFill")}
                  />
                  <label htmlFor="auto-fill">Auto Fill</label>
                </div>

                <button type="submit" className="sign-in__button">
                  Sign In
                  {loading === "pending" && (
                    <span className="spinner-indicator">
                      <LoadingSpinner
                        isDefaultCss={false}
                        color="white"
                        size={"12"}
                      />
                    </span>
                  )}
                </button>
              </form>

              <div className="register__action">
                <span className="register__action-info">or</span>
                <Link to="/register" className="create-account-action">
                  create an account
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="left"></section>

        <section className="right"></section>
      </div>
  );
}
