import ActionInterface from "../../interfaces/actionInterface";
import StateInterface from "../../interfaces/stateInterface";
import getUser from "../../utils/getUser";
import { SET_USER } from "../constants";

const initialState = {
    user: {
        email: "",
        password: "",
        token: "",
    }
};

const reducer = (state: StateInterface = initialState, { type, payload }: ActionInterface) => {
    switch (type) {

        // ----------------------------- Levels Arr
        case SET_USER:
            return {
                ...state,
                user: payload
            };

        default:
            return state;
    }
};


export default reducer;