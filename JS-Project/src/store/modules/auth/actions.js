import * as types from '../types';

export function loginRequest(payload) {
     return {
          type: types.LOGIN_REQUEST_REQUEST,
          payload,
     }
}
export function loginSuccess(payload) {
     return {
          type: types.LOGIN_REQUEST_SUCCESS,
          payload,
     }
}
export function loginFailure(payload) {
     return {
          type: types.LOGIN_REQUEST_FAILURE,
          payload,
     }
}
export function updateRequest(payload) {
     return {
          type: types.PROFILE_UPDATE_REQUEST,
          payload,
     }
}
export function updateSuccess(payload) {
     return {
          type: types.PROFILE_UPDATE_SUCCESS,
          payload,
     }
}
export function updateFailure(payload) {
     return {
          type: types.PROFILE_UPDATE_FAILURE,
          payload,
     }
}
