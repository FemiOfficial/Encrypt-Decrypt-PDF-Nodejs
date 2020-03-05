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
var processor = new processor_1.default(sourcepath, destpath, password, username);
// encrypt pdf
var encryptor = processor.process(encryptmethod);
//decrypt pdf
var decryptor = processor.process(decryptmethod);
