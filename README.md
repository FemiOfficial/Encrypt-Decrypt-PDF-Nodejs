[![Build Status](https://travis-ci.org/FemiOfficial/Encrypt-Decrypt-PDF-Nodejs.svg?branch=master)](https://travis-ci.org/FemiOfficial/Encrypt-Decrypt-PDF-Nodejs)

## Encrypting and Decrypting PDF files with Nodejs

A nodejs library implemented in TS to convieniently encrypt and decrypt pdf documents and save to disk.

### Compactibility
VanillaJS, ES5, ES6 and Typescript


### Dependecies 
Majorly depends on Linux [qpdf](http://qpdf.sourceforge.net/)

### Installation

Install [qpdf](http://qpdf.sourceforge.net/)

`sudo apt-get install -y qpdf`

Install `encrypt-decrpt-pdf`

`npm i encrypt-decrpt-pdf`

### Using Encrypt-Decrypt-PDF


#### Intializing in JS
```
const path = require('path');
const Processor = require('encrypt-decrpt-pdf').PDFProcessor;

const password = 'testpassword';
const username = "testusername";

const processor = new Processor(password, username);

```

#### Declaring Parameters
```

const sourcepath = path.join(__dirname, 'path to file');
const destpath = path.join(__dirname, 'path to file');

const encryptmethod = 'encrypt'
const decryptmethod = 'decrypt'

```

After initializing, you can use the `process` method to encrypt/decrypt any PDF file with the correct parameters needed. 

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
