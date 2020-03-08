import { exec } from "child_process";

export namespace EncryptDecryptPDF {
  
  export class PDFProcessor {
  password: String;
  username: String;
  methodarray: Array<String>;

  constructor(password: String, username: String) {
    this.password = password;
    this.username = username;
    this.methodarray = ["decrypt", "encrypt"];
  }

  public async process(method: string, orgfilepath: string, newfilepath: string) {
    if (!this.methodarray.includes(method)) {
      return { error: true, message: "invalid method parameter (encrypt or decrypt)" };
    }
    // linux qpdf command to encrypt/decrypt pdf
    const cmd: string =
      method === this.methodarray[0]
        ? `qpdf --password=${this.password} --${method} ${orgfilepath} ${newfilepath}`
        : `qpdf --${method} ${this.username} ${this.password} 40 -- ${orgfilepath} ${newfilepath}`;

    const res = await new Promise((resolve, reject) => {
      exec(cmd, (error: any) => {
        if (error !== null) {
          resolve({ error: true, message: error });
        } else {
          reject({
            error: false,
            message: `pdf ${method}ed successfully and saved here => ${newfilepath}`
          });
        }
      });
    });

    return res;
  }
}

}

// export default PDFProcessor;