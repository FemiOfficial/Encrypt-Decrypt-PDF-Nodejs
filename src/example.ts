import path from 'path';
import * as Processor from "./processor";


const destpath: string = path.join(__dirname, '../src/encrypted/test_encrypted.pdf');
const sourcepath: string = path.join(__dirname, '../src/decrypted/test_decrypted.pdf');
const password: String = 'testpassword';
const username: String = "testusername";

const processor = new Processor.EncryptDecryptPDF.PDFProcessor(password, username);

// encrypt pdf
// processor
//   .encrypt(sourcepath, destpath)
//   .then((data: any) => console.log(data))
//   .catch((err: any) => console.log(err));
 
// //decrypt pdf
processor
  .decrypt(destpath, sourcepath)
  .then((data: any) => console.log(data))
  .catch((err: any) => console.log(err));

