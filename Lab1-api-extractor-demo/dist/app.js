"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //HTTP 
const config_1 = require("./config/config");
const api_extractor_demo_routes_1 = __importDefault(require("./api-extractor-demo.routes"));
const app = (0, express_1.default)();
//Middleware que permite a tu server entender payloads
app.use(express_1.default.json());
//Inicializando tus rutas
app.use('/api/planetary', api_extractor_demo_routes_1.default);
/// Encender el server
app.listen(config_1.envs.PORT, () => {
    console.log(`Server Initialized`);
    console.log(`Endpoint disponible en: http://localhost:${config_1.envs.PORT}/api/planetary/today`);
});
//# sourceMappingURL=app.js.map