/* eslint-disable react-hooks/rules-of-hooks */

import { call, put, all, takeLatest, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import { get } from 'lodash';
import { AxiosResponse } from 'axios';

// Definição dos tipos de payload para as ações
interface LoginRequestAction {
    type: typeof types.LOGIN_REQUEST_REQUEST;
    payload: {
        email: string;
        password: string;
    };
}

interface PersistRehydrateAction {
    type: typeof types.PERSIST_REHYDRATE;
    payload: {
        auth: {
            token: string;
        };
    };
}

interface UpdateProfileRequestAction {
    type: typeof types.PROFILE_UPDATE_REQUEST;
    payload: {
        id: string;
        nome: string;
        email: string;
        password?: string;
    };
}

function* loginRequest({ payload }: LoginRequestAction) {
    try {
        const response: AxiosResponse = yield call(axios.post, '/login', payload);
        yield put(actions.loginSuccess({ ...response.data }));
        toast.success('Login efetuado com sucesso!');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    } catch (e) {
        yield put(actions.loginFailure({ error: 'Usuário ou senha inválidos.' }));
        toast.error('Usuário ou senha inválidos.');
    }
}

// eslint-disable-next-line require-yield
function* persistRehydrate({ payload }: PersistRehydrateAction) {
    const token = get(payload, 'auth.token');
    if (!token) return;

    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* updateProfileRequest({ payload }: UpdateProfileRequestAction) {
    const { id, nome, email, password } = payload;

    try {
        if (id) {
            yield call(axios.put, `/users/`, {
                nome,
                email,
                password: password || undefined,
            });
            toast.success('Seu Perfil foi atualizado com sucesso!');
            yield put(actions.updateSuccess());
        }
    } catch (err) {
        const errors = get(err, 'response.data.errors', []);
        // const status = get(err, "response.status", 0);

        if (errors.length > 0) {
            errors.forEach((error: string) => toast.error(error));
        } else {
            toast.error('Ocorreu um erro ao atualizar o perfil, tente novamente.');
        }
        yield put(actions.updateFailure({ error: 'Ocorreu um erro ao atualizar o perfil, tente novamente.' }));
    }
}

function* watchLoginRequest() {
    yield takeLatest(types.LOGIN_REQUEST_REQUEST, loginRequest);
}

function* watchPersistRehydrate() {
    yield takeLatest(types.PERSIST_REHYDRATE, persistRehydrate);
}

function* watchUpdateProfileRequest() {
    yield takeLatest(types.PROFILE_UPDATE_REQUEST, updateProfileRequest);
}

export default function* authSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
    yield all([fork(watchLoginRequest), fork(watchPersistRehydrate), fork(watchUpdateProfileRequest)]);
}
