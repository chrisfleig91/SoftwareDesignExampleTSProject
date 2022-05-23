import { existsSync, mkdirSync, writeFileSync } from "fs"

class FileHandler {
  private static _instance: FileHandler = new FileHandler()

  private constructor() {
    if (FileHandler._instance)
      throw new Error("Use FileHandler.getInstance() instead new FileHandler()")
    FileHandler._instance = this
  }

  public static getInstance(): FileHandler {
    return FileHandler._instance
  }

  public writeFile(dataToWrite: any, pathToFile: string, file: string) {
    if(!existsSync(pathToFile))
      mkdirSync(pathToFile)

    writeFileSync(pathToFile + file, JSON.stringify(dataToWrite))
  }
}

export default FileHandler.getInstance()