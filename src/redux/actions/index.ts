import ActionInterface from "../../interfaces/actionInterface";
import UserInterface from "../../interfaces/user";
import { SET_USER } from "../constants";

export const setUserAction = (payload: UserInterface): ActionInterface => ({
    type: SET_USER,
    payload,
});