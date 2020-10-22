"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// import transfersRouter from './transfers.routes';
var clientes_routes_1 = __importDefault(require("./clientes.routes"));
var empresas_routes_1 = __importDefault(require("./empresas.routes"));
// import sessionsRouter from './sessions.routes';
var routes = express_1.Router();
// routes.use('/transferencias', transfersRouter);
routes.use('/clientes', clientes_routes_1.default);
routes.use('/empresas', empresas_routes_1.default);
// routes.use('/sessions', sessionsRouter);
exports.default = routes;
