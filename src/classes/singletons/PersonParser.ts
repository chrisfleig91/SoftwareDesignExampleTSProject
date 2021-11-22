import { Person } from "../Person";
import { PersonJson } from "../type/personJson.type";

export class PersonParser {
  private static _instance : PersonParser = new PersonParser();

  private constructor() {
    if(PersonParser._instance) 
      throw new Error("Instead of using new PersonParser(), please use PersonParser.getInstance() for Singleton!")
    PersonParser._instance = this;
  }

  public static getInstance() : PersonParser {
    return PersonParser._instance;
  }

  public parsePersonToPersonJson(person : Person) : PersonJson {
    return { "Name": person.getName(), "Age": person.getAge() }
  }

  public parsePersonJsonToPerson(personJson : PersonJson) : Person {
    return new Person(personJson.Name, personJson.Age);
  }
}

export default PersonParser.getInstance();