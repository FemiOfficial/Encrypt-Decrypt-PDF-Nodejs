import path from "path";
import Processor from "./processor";
import assert from 'assert';
import { expect } from 'chai';


const sourcepath: string = path.join(
  __dirname,
  "../src/encrypted/testdocument.pdf"
);

const invalidsrcpath: string = path.join(
  __dirname,
  "../src/encrypted/none.pdf"
);

const destpath: string = path.join(
  __dirname,
  "../src/decrypted/testdocument.pdf"
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

const processor = new Processor(password, username);

describe('Testing Processor on various test scenarios', () => {
    it('should throw an error for invalid file path for encryption', () => {
        processor.process(encryptmethod, invalidsrcpath, destpath)
            .then((data: any) => {
                assert.equal(data.error, true)
            });

    }) 

    it("should throw an error for invalid file path for decryption", () => {
        processor.process(decryptmethod, invalidsrcpath, destpath)
            .then((data: any) => {
                assert.equal(data.error, true);
            });
    }); 

  

    it("should throw an error for invalid file path", () => {

    });

    it("should throw an error for invalid file path", () => {

    }); 
})
