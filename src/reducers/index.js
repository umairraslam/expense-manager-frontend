
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import snackbar from './snackbar';
import expense from './expense';
const appReducer = combineReducers({
    form: formReducer,
    auth,
    snackbar,
    expense
});


const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
