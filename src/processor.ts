import { exec } from "child_process";

class PDFProcessor {

    orgfilepath: String;
    newfilepath: String;
    password: String;
    username: String;
    methodarray: Array<String>;

    constructor(orgfilepath: String, newfilepath: String, password: String, username: String) {
        this.orgfilepath = orgfilepath;
        this.newfilepath = newfilepath;
        this.password = password;
        this.username = username;
        this.methodarray = ['decrypt', 'encrypt'];
    }

    public async process(method: string) {
        if (!this.methodarray.includes(method)) {
            throw 'invalid method parameter (encrypt or decrypt)'
        }
        // linux qpdf command to encrypt/decrypt pdf
        const cmd: string =
          method === this.methodarray[0]
            ? `qpdf --password=${this.password} --${method} ${this.orgfilepath} ${this.newfilepath}`
            : `qpdf --${method} ${this.username} ${this.password} 40 -- ${this.newfilepath} ${this.orgfilepath}`;

        const res = await new Promise((resolve, reject) => {

            exec(cmd, (error: any) => {
                if (error !== null){

                    resolve({ error: true, message: error})
            
                } else {

                    reject({error: false, message: `pdf ${method}ed successfully and saved here' + ${this.newfilepath}`})
                   
                }});
    
        });

        return res;


    }
}

export default PDFProcessor;