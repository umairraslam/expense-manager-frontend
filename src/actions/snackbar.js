export const SNACKBARS = {
    SHOW_SUCCESS : 'SHOW_SUCCESS',
    SHOW_ERROR:'SHOW_ERROR'
}


export function showSuccess(){
    return {
        type:SNACKBARS.SHOW_SUCCESS,
        showSuccessSnackbar:true
    }
}

export function hideSuccess(){
    return {
        type:SNACKBARS.SHOW_SUCCESS,
        showSuccessSnackbar:false
    }
}

export function showError(){
    return {
        type:SNACKBARS.SHOW_ERROR,
        showErrorSnackbar:true
    }
}

export function hideError(){
    return {
        type:SNACKBARS.SHOW_ERROR,
        showErrorSnackbar:false
    }
}