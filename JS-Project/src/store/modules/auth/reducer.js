import * as types from '../types';

const initialState = {
     isLoggedIn: false,
     token: false,
     user: {},
     isLoading: false,
}

export default function authReducer(state = initialState, action) {
     switch (action.type) {
          case types.LOGIN_REQUEST_SUCCESS: {
               console.log(action.payload);
               const newState = { ...state };
               newState.isLoggedIn = true;
               newState.token = action.payload.token;
               newState.user = action.payload.user;
               newState.isLoading = false;
               return newState;
          }

          case types.LOGIN_REQUEST_FAILURE: {
               const newState = { ...initialState };
               newState.isLoading = false;
               return newState;
          }

          case types.LOGIN_REQUEST_REQUEST: {
               const newState = { ...initialState };
               newState.isLoading = true;
               return newState;
          }

          case types.PROFILE_UPDATE_SUCCESS: {
               const newState = { ...state };
               newState.isLoading = false;
               return newState;

          }
          case types.PROFILE_UPDATE_REQUEST: {
               const newState = { ...state };
               newState.isLoading = true;
               newState.user = action.payload;
               return newState;

          }
          case types.PROFILE_UPDATE_FAILURE: {
               const newState = { ...state };
               newState.isLoading = false;
               return newState;

          }

          default: {
               return state;
          }
     }
}
