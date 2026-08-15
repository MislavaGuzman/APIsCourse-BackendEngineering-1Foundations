"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const planetary_controller_1 = require("./planetary/controllers/planetary.controller");
const router = (0, express_1.Router)();
router.get('/today', planetary_controller_1.getSpaceToday);
exports.default = router;
//# sourceMappingURL=api-extractor-demo.routes.js.map