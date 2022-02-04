import ErrorUserInterface from "../interfaces/errorUser";
import UserInterface from "../interfaces/user";
import axios from "axios";

export default async function userValidate(user: UserInterface): Promise<ErrorUserInterface> {
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

    else {
        try {
            const userParams: any = {
                email: user.email,
                password: user.password
            };
            console.log(userParams);
            let responseApi: any = {}

            axios.post(
                "http://challenge-react.alkemy.org/",
                JSON.stringify(userParams),
                {
                    "headers": {
                        "content-type": "application/json",
                    }
                }).then((response) => {
                    responseApi = response.data;
                    console.log(responseApi);
                }).catch((error) => {
                    console.log(error);
                });

            if (!responseApi.token) response.errorPassword = "Contraseña incorrecta";
            else response.token = responseApi.token;
        }
        catch (error) {
            console.log(error);
        }
    }

    return response;
}