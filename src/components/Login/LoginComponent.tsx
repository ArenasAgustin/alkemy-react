import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import userValidate from "../../utils/userValidate";
import Swal from "sweetalert2";
import { setUserAction } from "../../redux/actions/index";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import "./LoginComponent.scss";

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
      Swal.fire({
        title: "Error!",
        text: response.errorToken,
        icon: "error",
      });
    else {
      dispatch(setUserAction({ email: user.email, token: response.token }));
      navigate("/home");
    }
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
      </div>

      <div className="login__form-group">
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          className="login__input"
          placeholder="Password"
        />
      </div>

      <button type="submit" className="login__submit-button">
        Login
      </button>
    </form>
  );
}
