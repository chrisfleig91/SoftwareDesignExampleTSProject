import readline from 'readline';

class Console {
  private static _instance : Console = new Console();

  public consoleLine : readline.ReadLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

  constructor() {
    if(Console._instance) 
      throw new Error("Instead of using new Console(), please use Console.getInstance() for Singleton!")
    Console._instance = this;
  }

  public static getInstance() : Console {
    return Console._instance;
  }

  public printLine(line : string) : void {
    this.consoleLine.write(line);
    this.consoleLine.write("\n");
  }

  public showOptions(options : string[], question: string) : Promise<string> {

    this.consoleLine.write("Options to choose: ");
    this.consoleLine.write("\n\n");

    for(let i in options) {
      this.consoleLine.write(`${parseInt(i)+1}. ${options[i]}`);
      this.consoleLine.write("\n");
    }

    return new Promise((resolve) => this.consoleLine.question(question, (answer: string) => {
      resolve(answer);
    }));
  }

}

export default Console.getInstance();