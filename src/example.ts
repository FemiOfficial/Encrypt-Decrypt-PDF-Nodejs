import path from 'path';
import * as Processor from "./processor";


const sourcepath: string = path.join(__dirname, '../src/encrypted/testdocument.pdf');
const destpath: string = path.join(__dirname, '../src/decrypted/testdocument.pdf');
const password: String = 'testpassword';
const username: String = "testusername";

const encryptmethod: string = 'encrypt'
const decryptmethod: string = 'decrypt'


const processor = new Processor.EncryptDecryptPDF.PDFProcessor(password, username);

// encrypt pdf
processor
  .process(encryptmethod, destpath, sourcepath)
  .then((data: any) => console.log(data))
  .catch((err: any) => console.log(err));

//decrypt pdf
processor
  .process(decryptmethod, sourcepath, destpath)
  .then((data: any) => console.log(data))
  .catch((err: any) => console.log(err));

