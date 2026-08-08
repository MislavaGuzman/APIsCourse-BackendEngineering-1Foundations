"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpaceToday = void 0;
const planetary_service_1 = require("../services/planetary.service");
const node_console_1 = require("node:console");
const getSpaceToday = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const spaceData = yield (0, planetary_service_1.fetchAstronomyPicture)();
        const id = 12312;
        res.status(200).json({
            success: true,
            data: {
                titulo_nuevo: spaceData.title,
                fecha: spaceData.date,
                descripcion: spaceData.explanation,
                personalizado: `${id} Este es ID personalizado`,
                imagen: spaceData.url,
                autor: spaceData.copyright,
            }
        });
    }
    catch (err) {
        console.error(`Ocurrio un error`, node_console_1.error),
            res.status(500).json({
                success: false,
                message: 'Error de servidor.'
            });
    }
});
exports.getSpaceToday = getSpaceToday;
//# sourceMappingURL=planetary.controller.js.map