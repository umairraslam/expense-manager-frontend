import { expenseService } from '../services/expenseService';
import {showSuccess, hideSuccess, showError, hideError} from './snackbar';

export const GET_EXPENSES = 'GET_EXPENSES';

function setExpenses(expenses, isProcessing, isProcessed) {
    return {
        type: GET_EXPENSES,
        expenses: expenses,
        isProcessing: isProcessing,
        isProcessed: isProcessed
    };
}

export function clearExpenseState() {
    return {
        type: GET_EXPENSES,
        expenses: [],
        isProcessing: false,
        isProcessed: false
    };
}

export function getExpenses() {
    return (dispatch) => {
        dispatch(setExpenses([], true, false));
        expenseService.getAllExpenses()
        .then((result) => {
            console.log(result);
            if(result.ok){
                result.json().then((json) => {
                    dispatch(setExpenses(json, false, true));
                })
            } else{
                result.json().then((json) => {
                    dispatch(setExpenses([], false, false));
                    dispatch(showError(json.message));
                })
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
}