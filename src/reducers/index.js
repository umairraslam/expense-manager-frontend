
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import snackbar from './snackbar';
const appReducer = combineReducers({
    form: formReducer,
    auth,
    snackbar
});


const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
