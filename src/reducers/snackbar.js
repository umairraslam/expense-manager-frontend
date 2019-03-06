import { SNACKBARS } from '../actions/snackbar';

const snackbar = (state = [], action) => {

    switch (action.type) {
        case SNACKBARS.SHOW_SUCCESS:
            return { ...state, showSuccessSnackbar: action.showSuccessSnackbar }
        case SNACKBARS.SHOW_ERROR:
            return { ...state, showErrorSnackbar: action.showErrorSnackbar}
        default:
            return state;

    }

}

export default snackbar