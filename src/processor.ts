import { exec } from "child_process";

export namespace EncryptDecryptPDF {
  
  export class PDFProcessor {
  password: String;
  username: String;

  constructor(password: String, username: String) {
    this.password = password;
    this.username = username;
  }

  public async decrypt(orgfilepath: string, newfilepath: string) {
    return await this.process('decrypt', orgfilepath, newfilepath);
  }

  public async encrypt(orgfilepath: string, newfilepath: string) {
    return await this.process('encrypt', orgfilepath, newfilepath);
  }

  private async process(method: 'encrypt' | 'decrypt', orgfilepath: string, newfilepath: string) {
    // linux qpdf command to encrypt/decrypt pdf
    const cmd: string =
      method === 'decrypt'
        ? `qpdf --password=${this.password} --${method} ${orgfilepath} ${newfilepath} --allow-weak-crypto`
        : `qpdf --${method} ${this.username} ${this.password} 40 -- ${orgfilepath} ${newfilepath} --allow-weak-crypto`;

    const res = new Promise((resolve, reject) => {
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
