import prompts from 'prompts';
import ConsoleHandling from './classes/ConsoleHandling';

export class Main {
  constructor() { }

  public async startApp() {
    // ConsoleHandling.printText("I'm running")
    // let answerNameConsole = await ConsoleHandling.askAQuestion("How old are you?")

    let answerName = await prompts({
      type: 'text',
      name: 'value',
      message: 'What\'s your name?',
    });

    let answerAge = await prompts({
      type: 'number',
      name: 'value',
      message: 'How old are you?',
      validate: value => value < 18 ? `Nightclub is 18+ only` : true
    });

    console.log("My Name is " + answerName.value);
    console.log("I am " + answerAge.value + " years old!");
  }
}

let main: Main = new Main();
main.startApp();