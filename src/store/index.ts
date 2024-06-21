import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { ThunkDispatch } from 'redux-thunk';

import persistedReducers from './modules/reduxPersist';
import rootReducer, { RootState } from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { AnyAction } from 'redux';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store: Store<RootState, AnyAction> = createStore(persistedReducers(rootReducer), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;

// Tipo Dispatch configurado para usar Thunk e Action
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
