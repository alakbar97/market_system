import { createStore, compose } from "redux";
import schema from "./state/schema";

import rootReducer from "./state/reducers";

// initial data for entire app.
const initialData = schema;
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const enhancers = [];

// redux dev tool extension for only development usage.

if (process.env.NODE_ENV === "development") {
    const devtool = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devtool === "function") {
        enhancers.push(devtool());
    }
}

// compose and apply middlewares and enhancers
const composedEnhancers = compose(
    ...enhancers
);

// create redux store
const store = createStore(rootReducer, preloadedState || initialData, composedEnhancers);

//SSR Redux
window.snapSaveState = () => ({
    __PRELOADED_STATE__: store.getState()
});

export default store;

