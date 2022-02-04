import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import userValidate from "../../utils/userValidate";
import Swal from "sweetalert2";

export default function Login() {
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
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const response = userValidate(user);

    response
      .then((res) => {
        setError({
          errorEmail: res.errorEmail,
          errorPassword: res.errorPassword,
          errorToken: res.errorToken,
        });

        setUser({
          ...user,
          token: res.token,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (error.errorToken) {
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
      });
    }
  }, [error.errorToken]);

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
