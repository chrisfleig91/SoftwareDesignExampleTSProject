export class Person {
  private _Name: string;
  private _Age: number;

  constructor(name : string, age: number) {
    this._Name = name;
    this._Age = age;
  }

  public setName(newName: string) : void {
    this._Name = newName;
  }

  public setAge(newAge: number) : void {
    this._Age = newAge;
  }

  public getName(): string {
    return this._Name;
  }

  public getAge(): number {
    return this._Age;
  }
}
