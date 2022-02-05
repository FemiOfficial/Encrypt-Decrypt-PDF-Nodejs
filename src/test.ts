import path from "path";
import * as Processor from "./processor";

import assert from "assert";
import { expect } from "chai";

const sourcepath: string = path.join(
  __dirname,
  "../src/encrypted/test_encrypted.pdf"
);

const invalidsrcpath: string = path.join(
  __dirname,
  "../src/encrypted/none.pdf"
);

const destpath: string = path.join(
  __dirname,
  "../src/decrypted/test_decrypted.pdf"
);

const invaliddestpath: string = path.join(
  __dirname,
  "../src/decrypted/none.pdf"
);

const password: String = "testpassword";

const username: String = "testusername";

const invalidpassword: String = "blahblah";

const encryptmethod: string = "encrypt";
const decryptmethod: string = "decrypt";
const invalidmethod: string = "invalid";

const processor = new Processor.EncryptDecryptPDF.PDFProcessor(password, username);

const invalidprocessor = new Processor.EncryptDecryptPDF.PDFProcessor(invalidpassword, username);

describe("Testing Processor on various test scenarios", () => {
  it("should throw an error for invalid file path for encryption", () => {
    processor
      .encrypt(invalidsrcpath, destpath)
      .then((data: any) => {
        assert.equal(data.error, true);
      })
      .catch((e: any) => e);
  });

  it("should throw an error for invalid file path for decryption", () => {
    processor
      .decrypt(invalidsrcpath, destpath)
      .then((data: any) => {
        assert.equal(data.error, true);
      })
      .catch((e: any) => e);
  });

  it("should throw an error for invalid method on an encrypted file", () => {
    invalidprocessor
      .encrypt(destpath, sourcepath)
      .then((data: any) => {
        assert.equal(data.error, true);
      })
      .catch((e: any) => e);
  });

  it("should successfully decrypt an encrypted file", () => {
    processor
      .decrypt(sourcepath, destpath)
      .then((data: any) => {
        assert.deepEqual(data.error, false);
      })
      .catch((e: any) => e);
  });

  it("should throw error for invalid password on file", () => {
    invalidprocessor
      .decrypt(sourcepath, destpath)
      .then((data: any) => {
        assert.deepEqual(data.error, true);
      })
      .catch((e: any) => e);
  });

  it("should throw error for encrypting an already encrypted file", () => {
    processor
      .encrypt(sourcepath, destpath)
      .then((data: any) => {
        assert.deepEqual(data.error, true);
      })
      .catch((e: any) => e);
  });

  it("should successfully encrpyt a file", () => {
    processor
      .encrypt(destpath, sourcepath)
      .then((data: any) => {
        assert.deepEqual(data.error, false);
      })
      .catch((e: any) => e);
  });
});
