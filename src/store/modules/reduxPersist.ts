/* eslint-disable @typescript-eslint/no-explicit-any */
import storage from 'redux-persist/lib/storage';
import { persistReducer, PersistConfig } from 'redux-persist';
import { Reducer } from 'redux';

// Defina o estado real do auth
interface AuthState {
    isLoggedIn: boolean;
    token: string | null;
    user: any;
    isLoading: boolean;
}

// Defina a interface RootState
interface RootState {
    auth: AuthState;
}

// Defina PersistedState como um union type de RootState e PersistPartial
type PersistedState = {
    _persist: {
        version: number;
        rehydrated: boolean;
    };
} & RootState;

const persistConfig: PersistConfig<RootState> = {
    key: 'token-api-valorant',
    storage,
    whitelist: ['auth'],
};

const createPersistedReducer = (reducers: Reducer<RootState>): Reducer<PersistedState> => {
    const persistedReducer = persistReducer<RootState>(persistConfig, reducers);
    return persistedReducer;
};

export default createPersistedReducer;
