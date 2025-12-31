import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./CreateSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

let presistConfig={
    key:"root",
    storage,
    whitelist:["product"],

}

let rootReducer= combineReducers({
 product:ProductSlice,
})

let persistedReducer=persistReducer(presistConfig,rootReducer);


export const store=configureStore({
    reducer:persistedReducer,
});

export const persistor=persistStore(store);