import { Person } from "../classes/Person";

describe("this is a simple test!", () => {
  let person = new Person("Christoph Fleig", 30);

  test("check that name of person is string", () => {
    expect(typeof person.getName() === 'string').toBeTruthy();
  });

  test("check that name of person is not boolean", () => {
    expect(typeof person.getName() === 'boolean').toBeFalsy();
  });
});