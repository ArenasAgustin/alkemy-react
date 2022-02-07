import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import userValidate from "../../utils/userValidate";
import Swal from "sweetalert2";
import { setUserAction } from "../../redux/actions/index";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import "./LoginComponent.scss";
import "animate.css";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    token: "",
  });
  const [error, setError] = useState({
    errorEmail: "",
    errorPassword: "",
    errorToken: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const swalCustom = Swal.mixin({
    customClass: {
      title: "title-class",
      container: "container-class",
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    const response = userValidate(user);

    setError({
      errorEmail: response.errorEmail,
      errorPassword: response.errorPassword,
      errorToken: "",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const response = userValidate(user);

    setError({
      errorEmail: response.errorEmail,
      errorPassword: response.errorPassword,
      errorToken: response.errorToken,
    });

    setUser({
      ...user,
      token: response.token,
    });

    if (response.errorToken)
      swalCustom.fire({
        title: "Error!",
        text: response.errorToken,
        icon: "error",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    else {
      dispatch(setUserAction({ email: user.email, token: response.token }));
      navigate("/home");
    }
  };

  const handleShowPassword = (): void => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form
      className="login__form"
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
    >
      <h1 className="login__title">Login</h1>

      <div className="login__form-group">
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          className="login__input"
          placeholder="Email"
        />
        <span className="login__error">{error.errorEmail}</span>
      </div>

      <div className="login__form-group">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={user.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          className="login__input"
          placeholder="Password"
        />
        <div className="login__icon-container" onClick={handleShowPassword}>
          {showPassword ? <BsEyeSlash /> : <BsEye />}
        </div>
        <span className="login__error">{error.errorPassword}</span>
      </div>

      <button type="submit" className="login__submit-button">
        Login
      </button>
    </form>
  );
}
