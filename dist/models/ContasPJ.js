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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Empresas_1 = __importDefault(require("./Empresas"));
var ContaPJ = /** @class */ (function () {
    function ContaPJ() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], ContaPJ.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], ContaPJ.prototype, "empresa_id", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return Empresas_1.default; }),
        typeorm_1.JoinColumn({ name: 'empresa_id' }),
        __metadata("design:type", Empresas_1.default)
    ], ContaPJ.prototype, "empresa", void 0);
    __decorate([
        typeorm_1.Column('float'),
        __metadata("design:type", Number)
    ], ContaPJ.prototype, "saldo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], ContaPJ.prototype, "status", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], ContaPJ.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], ContaPJ.prototype, "updated_at", void 0);
    ContaPJ = __decorate([
        typeorm_1.Entity('contas_pj')
    ], ContaPJ);
    return ContaPJ;
}());
exports.default = ContaPJ;
