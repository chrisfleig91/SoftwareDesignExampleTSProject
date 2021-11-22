import { Person } from "../Person";

export class PersonDao {
  public Name : string;
  public Age : number;

  constructor(personDao: PersonDao) {
    this.Name = personDao.Name;
    this.Age = personDao.Age; 
  }
}