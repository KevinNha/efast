import React, { useReducer } from 'react';
import { Loader } from '../reducers';

export const Store = React.createContext();

const dispatch = {};

export function StoreProvider(props) {
    const [mapLoaderState, dispatchLoaderAction] = useReducer(Loader, dispatch);

    const loaderValue = {mapLoaderState, dispatchLoaderAction};

    const value = {
        ...loaderValue,
    };

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}
