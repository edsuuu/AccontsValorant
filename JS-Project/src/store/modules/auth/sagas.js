/* eslint-disable react-hooks/rules-of-hooks */

import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import { get } from 'lodash';

function* loginRequest({ payload }) {

     try {
          const response = yield call(axios.post, '/login', payload);
          yield put(actions.loginSuccess({ ...response.data }));
          toast.success('Login efetuado com sucesso!');

          axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

     } catch (e) {

          yield put(actions.loginFailure());
          toast.error('Usuário ou senha inválidos.');
     }
}


function persistRehydrate({ payload }) {
     const token = get(payload, 'auth.token');
     if (!token) return;

     axios.defaults.headers.Authorization = `Bearer ${token}`
}

function* updateProfileRequest({ payload }) {
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

          const errors = get(err, "response.data.errors", []);
          // const status = get(err, "response.status", 0);

          if (errors.length > 0) {
               errors.map((error) => toast.error(error));

          } else {
               toast.error('Ocorreu um erro ao atualizar o perfil, tente novamente.');
          }
          yield put(actions.updateFailure());
     }

}

export default all([
     takeLatest(types.LOGIN_REQUEST_REQUEST, loginRequest),
     takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
     takeLatest(types.PROFILE_UPDATE_REQUEST, updateProfileRequest),
]);
