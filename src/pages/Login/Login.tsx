import LoginComponent from "../../components/Login/LoginComponent";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login__background">
      <div className="login">
        <div className="login__div-img">
          <img
            src="https://spoonacular.com/recipeImages/665041-556x370.jpg"
            alt="Watermelon, Feta And Mint Salad"
            className="login__img"
          />
        </div>

        <div className="login__div-form">
          <LoginComponent />
        </div>
      </div>
    </div>
  );
}
