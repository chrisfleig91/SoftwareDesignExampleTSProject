import { createInterface, ReadLine } from "readline"

class ConsoleHandling {
  private static _instance: ConsoleHandling = new ConsoleHandling()

  private consoleLine: ReadLine = createInterface({
    input: process.stdin,
    output: process.stdout
  })

  private constructor() {
    if (ConsoleHandling._instance)
      throw new Error("Use ConsoleHandling.getInstance() instead new ConsoleHandling()")
    ConsoleHandling._instance = this
  }

  public static getInstance(): ConsoleHandling {
    return ConsoleHandling._instance
  }

  public printText(input: string) {
    this.consoleLine.write(input)
    this.consoleLine.write("\n")
  }

  public askAQuestion(questionToAsk: string) : Promise<string> {
    return new Promise((resolve) => {
      this.consoleLine.question(questionToAsk, (answer) => {
        resolve(answer)
      })
    })
  }
}

export default ConsoleHandling.getInstance()