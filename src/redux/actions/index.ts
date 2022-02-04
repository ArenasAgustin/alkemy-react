import ActionInterface from "../../interfaces/actionInterface";
import { SET_USER } from "../constants";

export const setUser = (payload: boolean[]): ActionInterface => ({
    type: SET_USER,
    payload,
});