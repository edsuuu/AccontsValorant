import * as types from '../types';

// Definição dos tipos de payload
interface LoginRequestPayload {
    login: string;
    password: string;
    prevPath: string;
}

interface LoginSuccessPayload {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
        permission: string;
    };
}

interface LoginFailurePayload {
    error: string;
}

interface UpdateRequestPayload {
    id: string;
    nome: string;
    email: string;
    password?: string;
}

interface UpdateSuccessPayload {}

interface UpdateFailurePayload {
    error: string;
}

// Definição dos tipos das ações
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Action<T = any> {
    type: string;
    payload?: T;
}

// Ações para login
export function loginRequest(payload: LoginRequestPayload): Action<LoginRequestPayload> {
    return {
        type: types.LOGIN_REQUEST_REQUEST,
        payload,
    };
}

export function loginSuccess(payload: LoginSuccessPayload): Action<LoginSuccessPayload> {
    return {
        type: types.LOGIN_REQUEST_SUCCESS,
        payload,
    };
}

export function loginFailure(payload: LoginFailurePayload): Action<LoginFailurePayload> {
    return {
        type: types.LOGIN_REQUEST_FAILURE,
        payload,
    };
}

// Ações para atualização de perfil
export function updateRequest(payload: UpdateRequestPayload): Action<UpdateRequestPayload> {
    return {
        type: types.PROFILE_UPDATE_REQUEST,
        payload,
    };
}

export function updateSuccess(payload: UpdateSuccessPayload = {}): Action<UpdateSuccessPayload> {
    return {
        type: types.PROFILE_UPDATE_SUCCESS,
        payload,
    };
}

export function updateFailure(payload: UpdateFailurePayload): Action<UpdateFailurePayload> {
    return {
        type: types.PROFILE_UPDATE_FAILURE,
        payload,
    };
}
