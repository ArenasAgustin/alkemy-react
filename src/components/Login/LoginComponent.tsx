import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import userValidate from "../../utils/userValidate";
import Swal from "sweetalert2";
import { setUserAction } from "../../redux/actions/index";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { useNavigate } from "react-router-dom";

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
      className="login"
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
    >
      <h1>Iniciar Seción</h1>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </div>

      <button type="submit">Iniciar Seción</button>
    </form>
  );
}
