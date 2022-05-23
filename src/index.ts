import prompts from 'prompts';
import { Person } from './classes/Person';
import ConsoleHandling from './classes/singleton/ConsoleHandling';
import FileHandler from './classes/singleton/FileHandler';

export class Main {
  constructor() { }

  public startApp() {
    this.getPersonValues();
  }

  public async getPersonValues() {
    // ConsoleHandling.printText("I'm running")
    // let answerNameConsole = await ConsoleHandling.askAQuestion("What's your name?")
    // let answerAgeConsole = await ConsoleHandling.askAQuestion("How old are you?")

    let answerName = await prompts({
      type: 'text',
      name: 'value',
      message: 'What\'s your name?',
    });

    let answerAge = await prompts({
      type: 'number',
      name: 'value',
      message: 'How old are you?',
    });

    let person : Person = new Person(answerName.value, answerAge.value)

    person.sayYourName()
    person.sayYourAge()

    FileHandler.writeFile(person, "data/", "person.json")
  }
}

let main: Main = new Main();
main.startApp();