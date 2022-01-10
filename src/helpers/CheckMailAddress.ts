export class CheckMailAddress {
  private static _instance : CheckMailAddress = new CheckMailAddress();

  private constructor() {
    if(CheckMailAddress._instance) 
      throw new Error("Instead of using new CheckMailAddress(), please use CheckMailAddress.getInstance() for Singleton!")
    CheckMailAddress._instance = this;
  }

  public static getInstance() : CheckMailAddress {
    return CheckMailAddress._instance;
  }

  public checkMailAddress(mailAddress: string) : boolean {
    return mailAddress.includes("@") && mailAddress.includes(".");
  }

  
}

export default CheckMailAddress.getInstance();