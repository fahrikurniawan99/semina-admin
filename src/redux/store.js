import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import categoriesReducer from "./categories/reducer";
import eventsReducer from "./events/reducer";
import listsReducer from "./lists/reducer";
import notifReducer from "./notif/reducer";
import ordersReducer from "./orders/reducer";
import paymentsReducer from "./payments/reducer";
import talentsReducer from "./talents/reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  notif: notifReducer,
  talents: talentsReducer,
  payments: paymentsReducer,
  lists: listsReducer,
  events: eventsReducer,
  orders: ordersReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
