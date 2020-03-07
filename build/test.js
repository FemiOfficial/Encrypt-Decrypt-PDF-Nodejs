"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var processor_1 = __importDefault(require("./processor"));
var assert_1 = __importDefault(require("assert"));
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
var invalidprocessor = new processor_1.default(invalidpassword, username);
describe("Testing Processor on various test scenarios", function () {
    it("should throw an error for invalid file path for encryption", function () {
        processor
            .process(encryptmethod, invalidsrcpath, destpath)
            .then(function (data) {
            assert_1.default.equal(data.error, true);
        })
            .catch(function (e) { return e; });
    });
    it("should throw an error for invalid file path for decryption", function () {
        processor
            .process(decryptmethod, invalidsrcpath, destpath)
            .then(function (data) {
            assert_1.default.equal(data.error, true);
        })
            .catch(function (e) { return e; });
    });
    it("should throw an error for invalid method on an encrypted file", function () {
        invalidprocessor
            .process(encryptmethod, destpath, sourcepath)
            .then(function (data) {
            assert_1.default.equal(data.error, true);
        })
            .catch(function (e) { return e; });
    });
    it("should successfully decrypt an encrypted file", function () {
        processor
            .process(decryptmethod, sourcepath, destpath)
            .then(function (data) {
            assert_1.default.deepEqual(data.error, false);
        })
            .catch(function (e) { return e; });
    });
    it("should throw error for invalid password on file", function () {
        invalidprocessor
            .process(decryptmethod, sourcepath, destpath)
            .then(function (data) {
            console.log(data.error);
            assert_1.default.deepEqual(data.error, true);
        })
            .catch(function (e) { return e; });
    });
    it("should throw error for encrypting an already encrypted file", function () {
        processor
            .process(encryptmethod, sourcepath, destpath)
            .then(function (data) {
            assert_1.default.deepEqual(data.error, true);
        })
            .catch(function (e) { return e; });
    });
    it("should successfully encrpyt a file", function () {
        processor
            .process(encryptmethod, destpath, sourcepath)
            .then(function (data) {
            assert_1.default.deepEqual(data.error, false);
        })
            .catch(function (e) { return e; });
    });
});
