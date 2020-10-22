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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var bcryptjs_1 = require("bcryptjs");
var AppEror_1 = __importDefault(require("../errors/AppEror"));
var Empresas_1 = __importDefault(require("../models/Empresas"));
var Clientes_1 = __importDefault(require("../models/Clientes"));
var CreateEmpresaService = /** @class */ (function () {
    function CreateEmpresaService() {
    }
    CreateEmpresaService.prototype.execute = function (_a) {
        var cnpj = _a.cnpj, nome_fantasia = _a.nome_fantasia, razao_social = _a.razao_social, endereco = _a.endereco, telefone = _a.telefone, responsavel_nome = _a.responsavel_nome, responsavel_cpf = _a.responsavel_cpf, responsavel_email = _a.responsavel_email, password = _a.password, cashback = _a.cashback;
        return __awaiter(this, void 0, void 0, function () {
            var empresasRepository, checkEmpresaCNPJExists, checkEmpresaEmailResponsavelExists, clientesRepository, checkClienteEmailExists, hashedPassword, empresa;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        empresasRepository = typeorm_1.getRepository(Empresas_1.default);
                        return [4 /*yield*/, empresasRepository.findOne({
                                where: { cnpj: cnpj },
                            })];
                    case 1:
                        checkEmpresaCNPJExists = _b.sent();
                        if (checkEmpresaCNPJExists) {
                            throw new AppEror_1.default('CNPJ da empresa já cadastrado');
                        }
                        return [4 /*yield*/, empresasRepository.findOne({
                                where: { responsavel_email: responsavel_email },
                            })];
                    case 2:
                        checkEmpresaEmailResponsavelExists = _b.sent();
                        if (checkEmpresaEmailResponsavelExists) {
                            throw new AppEror_1.default('E-mail do responsável já cadastrado');
                        }
                        clientesRepository = typeorm_1.getRepository(Clientes_1.default);
                        return [4 /*yield*/, clientesRepository.findOne({
                                where: { responsavel_email: responsavel_email },
                            })];
                    case 3:
                        checkClienteEmailExists = _b.sent();
                        if (checkClienteEmailExists) {
                            throw new AppEror_1.default('E-mail do responsável já cadastrado');
                        }
                        return [4 /*yield*/, bcryptjs_1.hash(password, 8)];
                    case 4:
                        hashedPassword = _b.sent();
                        empresa = empresasRepository.create({
                            cnpj: cnpj,
                            nome_fantasia: nome_fantasia,
                            razao_social: razao_social,
                            endereco: endereco,
                            telefone: telefone,
                            responsavel_email: responsavel_email,
                            responsavel_cpf: responsavel_cpf,
                            responsavel_nome: responsavel_nome,
                            password: hashedPassword,
                            cashback: cashback,
                        });
                        return [4 /*yield*/, empresasRepository.save(empresa)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, empresa];
                }
            });
        });
    };
    return CreateEmpresaService;
}());
exports.default = CreateEmpresaService;
