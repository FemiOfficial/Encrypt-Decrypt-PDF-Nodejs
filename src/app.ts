import { exec } from "child_process";

export class PDFProcessor {

    orgfilepath: String;
    newfilepath: String;
    password: String;
    method: String;

    constructor(orgfilepath: String, newfilepath: String, password: String, method: String) {
        this.orgfilepath = orgfilepath;
        this.newfilepath = newfilepath;
        this.password = password;
        this.method = method;
    }

    public process() {
        // linux qpdf command to encrypt pdf
        const cmd: string = `qpdf --password=${this.password} --decrypt ${this.orgfilepath} ${this.newfilepath}`;

        return new Promise((resolve, reject) => {

            exec(cmd, (error: any) => {
                if (error !== null){

                    console.log('exec error: ' + error);
                    resolve({ error: true, message: error})
            
                } else {

                    console.log('Your pdf is encripted successfully.');
                    resolve({error: false, message: 'pdf decrypted successfully and saved here' + this.newfilepath})
                   
                }});
    
        })


    }
}