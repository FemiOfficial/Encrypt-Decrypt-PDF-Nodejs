"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var processor_1 = __importDefault(require("./processor"));
var assert_1 = __importDefault(require("assert"));
var chai_1 = require("chai");
var sourcepath = path_1.default.join(__dirname, "../src/encrypted/testdocument.pdf");
var invalidsrcpath = path_1.default.join(__dirname, "../src/encrypted/none.pdf");
var destpath = path_1.default.join(__dirname, "../src/decrypted/testdocument.pdf");
var invaliddestpath = path_1.default.join(__dirname, "../src/decrypted/none.pdf");
var password = "testpassword";
var username = "testusername";
var invalidpassword = "blahblah";
var encryptmethod = "encrypt";
var decryptmethod = "decrypt";
var invalidmethod = "invalid";
var processor = new processor_1.default(password, username);
describe('Testing Processor on various test scenarios', function () {
    it('should throw an error for invalid file path for encryption', function () {
        processor.process(encryptmethod, invalidsrcpath, destpath)
            .then(function (data) {
            assert_1.default.equal(data.error, true);
        });
    });
    it("should throw an error for invalid file path for decryption", function () {
        processor.process(decryptmethod, invalidsrcpath, destpath)
            .then(function (data) {
            assert_1.default.equal(data.error, true);
        });
    });
    it("should throw an error process method", function () {
        chai_1.expect(function () {
            processor.process(invalidmethod, sourcepath, destpath);
        }).to.throw("invalid method parameter (encrypt or decrypt)");
    });
    it("should throw an error for invalid file path", function () {
    });
    it("should throw an error for invalid file path", function () {
    });
});
