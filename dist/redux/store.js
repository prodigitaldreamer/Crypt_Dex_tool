"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducers_1 = __importDefault(require("./reducers"));
const redux_saga_1 = __importDefault(require("redux-saga"));
const sagas_1 = __importDefault(require("./sagas"));
const sagaMiddleware = (0, redux_saga_1.default)();
const store = (0, redux_1.createStore)(reducers_1.default, 
// applyMiddleware(sagaMiddleware)
(0, redux_1.applyMiddleware)(sagaMiddleware));
sagaMiddleware.run(sagas_1.default);
exports.default = store;
