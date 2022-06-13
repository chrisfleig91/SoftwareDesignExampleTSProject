import prompts from "prompts";

export class Person {
  private _name: string;
  
  private _age : number;
  
  public constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  public sayYourName() {
    if(!(this._name == ""))
      console.log(`Hello! My name is ${this._name}`)
  }

  public sayYourAge() {
    console.log(`I am ${this._age} years old!`)
  }

  // get and set for property _name
  public getName(): string {
    return this._name;
  }
  public setName(value: string) : void {
    this._name = value;
  }

  // get and set for property _age
  public getAge(): number {
    return this._age;
  }
  public setAge(value: number) : void {
    this._age = value;
  }

  public validateAge(value: string) : boolean {
    return /^(\d|[1-9]\d{1,2})$/.test(value)
  }
}