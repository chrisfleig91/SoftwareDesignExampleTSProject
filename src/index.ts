import * as readline from 'readline';
import { Person } from './classes/Person';
import FileHandler from './classes/singletons/FileHandler';
import PersonParser from './classes/singletons/PersonParser';
import { PersonJson } from './classes/type/personJson.type';


export class Main {
  public consoleLine : readline.ReadLine;

  constructor() {
    this.consoleLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  public showProgramStatus() : void {
    this.consoleLine.write("I'm running\n\n");
    let readPerson : PersonJson = FileHandler.readJsonFile("./files/person.json");
    let person : Person = PersonParser.parsePersonJsonToPerson(readPerson);

    person.setName("Michael Müller");
    person.setAge(45);

    FileHandler.writeJsonFile("./files/newPerson.json", PersonParser.parsePersonToPersonJson(person));
  }
}

let main : Main = new Main();
main.showProgramStatus();