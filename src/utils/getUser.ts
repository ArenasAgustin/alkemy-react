import axios from "axios";
import UserInterface from "../interfaces/user";

export default async function getUser(user: UserInterface) {
    let response = await axios.post("http://challenge-react.alkemy.org/", user);

    return {
        ...user,
        token: response.data.token
    };
}