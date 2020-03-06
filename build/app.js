"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var processor_1 = __importDefault(require("./processor"));
var sourcepath = path_1.default.join(__dirname, '../src/encrypted/testdocument.pdf');
var destpath = path_1.default.join(__dirname, '../src/decrypted/testdocument.pdf');
var password = 'testpassword';
var username = "testusername";
var encryptmethod = 'encrypt';
var decryptmethod = 'decrypt';
var processor = new processor_1.default(password, username);
// encrypt pdf
processor
    .process('encryptmethod', destpath, sourcepath)
    .then(function (data) { return console.log(data); })
    .catch(function (err) { return console.log(err); });
//decrypt pdf
processor
    .process(decryptmethod, sourcepath, destpath)
    .then(function (data) { return console.log(data); })
    .catch(function (err) { return console.log(err); });
