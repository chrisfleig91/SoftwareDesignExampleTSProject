import CheckMailAddress from "../helpers/CheckMailAddress";

describe("check mail addresses", () => {
  let invalidMailAddresses : Array<string> = ["abc@abc","@."];
  let validMailAddresses : Array<string> = ["abc@abc.de","christoph.fleig@hs-furtwangen.de"];
  for(let mailAddress of invalidMailAddresses) {
    test("check invalid mail address", () => {
      expect(CheckMailAddress.checkMailAddress(mailAddress)).toBeFalsy();
    });
  }

  for(let mailAddress of validMailAddresses) {
    test("check valid mail address", () => {
      expect(CheckMailAddress.checkMailAddress(mailAddress)).toBeTruthy();
    });
  }
});