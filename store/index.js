import { createStore,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from './reducers/user';


const rootReducer = combineReducers ({
    user: userReducer,
});

const persistConfigs = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfigs,rootReducer);

const store = createStore(persistedReducer,composeWithDevTools());

export const persistor = persistStore(store);

export default store;
