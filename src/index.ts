// import of classes
import { Person } from './classes/Person';
// import of types
import { PersonJson } from './classes/type/personJson.type';
// import of singletons
import Console from './classes/singletons/Console';
import FileHandler from './classes/singletons/FileHandler';
import PersonParser from './classes/singletons/PersonParser';

export class Main {
  private _person : any;

  public async main() : Promise<void> {
    Console.printLine("I'm running!")
    
    await this.showOptions();
  }

  public async showOptions() : Promise<void> {
    let answer: string = await Console.showOptions(
      [
        "Read person file",
        "Change person",
        "Write new person"
      ], 
      "Which option do you want to choose?"
    );

    this.handleAnswer(answer);
  } 

  public readPersonFile() : void {
    let readPerson : PersonJson = FileHandler.readJsonFile("./files/person.json");
    this._person = PersonParser.parsePersonJsonToPerson(readPerson);
  }

  public changePerson() : void {
    this._person.setName("Michael Müller");
    this._person.setAge(45);
  } 

  public writePersonFile() : void {
    FileHandler.writeJsonFile("./files/newPerson.json", PersonParser.parsePersonToPersonJson(this._person));
  }

  public handleAnswer(answer : string) : void {
    switch(answer) {
      case "1":
        this.readPersonFile();
        Console.printLine("Person file read!")
        break;
      case "2":
        this.changePerson();
        Console.printLine("Person changed!")
        break;
      case "3":
        this.writePersonFile();
        Console.printLine("New person written!")
        break;
      default:
        Console.printLine("Option not available!");
    }

    this.showOptions();
  }
}

let main : Main = new Main();
main.main();