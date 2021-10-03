import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import mySaga from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
//is this necessary?
const middleware = [sagaMiddleware];

// mount it on the Store
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

// then run the saga
sagaMiddleware.run(mySaga);

export default store;