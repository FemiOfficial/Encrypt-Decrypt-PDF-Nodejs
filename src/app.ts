import path from 'path';
import Processor from './processor';


const sourcepath: string = path.join(__dirname, '../src/encrypted/testdocument.pdf');
const destpath: string = path.join(__dirname, '../src/decrypted/testdocument.pdf');
const password: String = 'testpassword';
const username: String = "testusername";

const encryptmethod: string = 'encrypt'
const decryptmethod: string = 'decrypt'


const processor = new Processor(password, username);

// encrypt pdf
processor
  .process('encryptmethod', destpath, sourcepath)
  .then(data => console.log(data))
  .catch(err => console.log(err));

//decrypt pdf
processor
  .process(decryptmethod, sourcepath, destpath)
  .then(data => console.log(data))
  .catch(err => console.log(err));

