## Encrypting and Decrypting PDF files with Nodejs

[![Build Status](https://travis-ci.org/FemiOfficial/Encrypt-Decrypt-PDF-Nodejs.svg?branch=master)](https://travis-ci.org/FemiOfficial/Encrypt-Decrypt-PDF-Nodejs)

### Dependecies 
Majorly depends on Linux [qpdf](http://qpdf.sourceforge.net/)

### Installation

Install [qpdf](http://qpdf.sourceforge.net/)

`sudo apt-get install -y qpdf`

Clone the repository or download and unzip:

`npm i encrypt-decrpt-pdf`

### Using Encrypt-Decrypt-PDF

```
import path from 'path';
import Processor from 'encrypt-decrpt-pdf';


const sourcepath: string = path.join(__dirname, '../src/encrypted/testdocument.pdf');
const destpath: string = path.join(__dirname, '../src/decrypted/testdocument.pdf');
const password: String = 'testpassword';
const username: String = "testusername";

const encryptmethod: string = 'encrypt'
const decryptmethod: string = 'decrypt'


const processor = new Processor(password, username);

```

After initializing, you can use `process` method to encrypt/decrypt any PDF file with the correct parameters needed. 

#### Encrypting PDF

```
processor
  .process(encryptmethod, destpath, sourcepath)
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

#### DEcrypting PDF

```
processor
  .process(decryptmethod, sourcepath, destpath)
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

Contributions are very welcome!
