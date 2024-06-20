// import { combineReducers } from 'redux';

// import auth from './auth/reducer';

// export default combineReducers({
//     auth,
// });


import { combineReducers } from 'redux';
import auth from './auth/reducer';

// Defina o tipo do estado da aplicação
const rootReducer = combineReducers({
    auth,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
