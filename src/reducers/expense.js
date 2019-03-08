import { GET_EXPENSES } from '../actions/expense';

const expense = (state = [], action) => {
    switch (action.type) {
        case GET_EXPENSES:
            return { ...state, expenses: action.expenses, isProcessing: action.isProcessing, isProcessed: action.isProcessed, message: action.message, error: action.error };
        default:
            return state;
    }
    
}

export default expense;