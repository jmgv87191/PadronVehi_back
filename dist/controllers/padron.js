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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putForm = exports.postForm = exports.deleteForm = exports.getForm = exports.getForms = void 0;
const padron_1 = __importDefault(require("../models/padron"));
const getForms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield padron_1.default.findAll();
    res.json(productos);
});
exports.getForms = getForms;
const getForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productos = yield padron_1.default.findByPk(id);
    if (productos) {
        res.json(productos);
    }
    else {
        res.json({
            msg: `no existe un producto con el id ${id}`
        });
    }
});
exports.getForm = getForm;
const deleteForm = (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        msg: 'delete Form'
    });
};
exports.deleteForm = deleteForm;
const postForm = (req, res) => {
    const { body } = req;
    res.json({
        body,
        msg: 'post Form'
    });
};
exports.postForm = postForm;
const putForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const productos = yield padron_1.default.findByPk(id);
        if (productos) {
            productos.update(body);
            res.json({
                msg: 'producto actualizado',
                productos
            });
        }
        else {
            res.json({
                msg: ` no existe un producto con el id ${id}`
            });
        }
    }
    catch (error) {
        res.json({
            msg: 'ups algo paso'
        });
    }
});
exports.putForm = putForm;
