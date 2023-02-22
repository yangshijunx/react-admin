import { legacy_createStore as createStore, combineReducers, Store, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import global from "./modules/global/reducer";

// 创建reducer(拆分reducer)
// 接收一个拆分后 reducer 函数组成的对象，返回一个新的 Reducer 函数。
const reducer = combineReducers({
	global
});

// redux 持久化配置
const persistConfig = {
	key: "redux-state",
	storage: storage
};
const persistReducerConfig = persistReducer(persistConfig, reducer);

// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

// 创建 store
/**
 * createStore有三个参数
 * 1.分别是当前的 state 树和要处理的 action，返回新的 state 树。
 * 2.初始时的 state。
 * 3.它也允许你通过复合函数改变 store 接口。
 */
const store: Store = createStore(persistReducerConfig, composeEnhancers(middleWares));

// 创建持久化 store
const persistor = persistStore(store);

export { store, persistor };
