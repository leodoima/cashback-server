"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCodeTransfers = exports.generateCodeCards = void 0;
function generateCodeCards() {
    var min = Math.ceil(100000);
    var max = Math.floor(999999);
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.generateCodeCards = generateCodeCards;
function generateCodeTransfers() {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    var length = 6;
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
exports.generateCodeTransfers = generateCodeTransfers;
