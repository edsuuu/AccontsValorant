import { AnyAction } from 'redux';
import * as types from '../types';

interface User {
    id?: string;
    name?: string;
    email?: string;
    permission?: string;
}

interface AuthState {
    isLoggedIn: boolean;
    token: string | null;
    user: User;
    isLoading: boolean;
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: null,
    user: {},
    isLoading: false,
};

export default function authReducer(state = initialState, action: AnyAction): AuthState {
    switch (action.type) {
        case types.LOGIN_REQUEST_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
                user: action.payload.user,
                isLoading: false,
            };
        }

        case types.LOGIN_REQUEST_FAILURE: {
            return {
                ...initialState,
                isLoading: false,
            };
        }

        case types.LOGIN_REQUEST_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case types.PROFILE_UPDATE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }

        case types.PROFILE_UPDATE_REQUEST: {
            return {
                ...state,
                isLoading: true,
                user: action.payload,
            };
        }

        case types.PROFILE_UPDATE_FAILURE: {
            return {
                ...state,
                isLoading: false,
            };
        }

        default: {
            return state;
        }
    }
}
