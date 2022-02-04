import ErrorUserInterface from "../interfaces/errorUser";
import UserInterface from "../interfaces/user";
import axios from "axios";

export default function userValidate(user: UserInterface): ErrorUserInterface {
    let response = {
        errorEmail: "",
        errorPassword: "",
        errorToken: "",
        token: "",
    }

    if (user.email === "")
        response.errorEmail = "Porfavor ingrese un correo electrónico válido";

    if (user.password === "")
        response.errorPassword = "Porfavor ingrese una contraseña válida";

    else if (user.email !== 'challenge@alkemy.org' || user.password !== 'react')
        response.errorToken = "Email y/o contraseña incorrectos";

    else response.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE'

    return response;
}