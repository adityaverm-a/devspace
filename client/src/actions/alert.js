import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';
import { toast } from "react-toastify";

export const  setAlert = (msg, alertType) => dispatch => {
    const id = uuidv4();

    dispatch({ type: SET_ALERT, payload: { msg, alertType, id }});
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id}), 5000);
};

export function successAlert(msg) {
    return function(dispatch) {
        const id = uuidv4();
        dispatch({ type: SET_ALERT, payload: { msg, id } });
        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id}), 5000);

        toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };
}

export function errorAlert(msg) {
    return function(dispatch) {
        const id = uuidv4();
        dispatch({ type: SET_ALERT, payload: { msg, id } });
        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id}), 5000);

        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };
}

export function infoAlert(msg) {
    return function(dispatch) {
        const id = uuidv4();
        dispatch({ type: SET_ALERT, payload: { msg, id } });
        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id}), 5000);

        toast.info(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };
}
