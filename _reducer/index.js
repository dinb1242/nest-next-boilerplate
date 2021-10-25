// Combine Reducer
import { combineReducers } from "redux";
import example from "./exampleReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
}

const rootReducer = combineReducers({
    example
})

export default persistReducer(persistConfig, rootReducer);