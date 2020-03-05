import path from 'path';
import Processor from './processor';


const sourcepath: String = path.join(__dirname, '../src/encrypted/testdocument.pdf');
const destpath: String = path.join(__dirname, '../src/decrypted/testdocument.pdf');
const password: String = 'testpassword';
const username: String = "testusername";

const encryptmethod: string = 'encrypt'
const decryptmethod: string = 'decrypt'


const processor = new Processor(sourcepath, destpath, password, username);

// encrypt pdf
processor.process(encryptmethod)
.then(data => console.log(data))
.catch(err => console.log(err));

//decrypt pdf
processor.process(decryptmethod)
.then(data => console.log(data))
.catch(err => console.log(err));

