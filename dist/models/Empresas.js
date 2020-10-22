"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Empresa = /** @class */ (function () {
    function Empresa() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Empresa.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "cnpj", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "nome_fantasia", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "razao_social", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "endereco", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "telefone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "responsavel_nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "responsavel_cpf", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "responsavel_email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Empresa.prototype, "cashback", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Empresa.prototype, "status", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Empresa.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Empresa.prototype, "updated_at", void 0);
    Empresa = __decorate([
        typeorm_1.Entity('empresas')
    ], Empresa);
    return Empresa;
}());
exports.default = Empresa;
