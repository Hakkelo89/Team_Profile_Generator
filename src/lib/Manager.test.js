const Manager = require("../lib/Manager");

describe("Manager class", () => {
  const mockManager = {
    name: "Hakel",
    id: "458",
    email: "hakelcam@gmail.com",
    officeNumber: "123",
  };
  describe("Constructor tests", () => {
    it("should create an instance of a Manager object", () => {
      const actual = new Manager(mockManager);

      expect(actual).toBeInstanceOf(Manager);
    });

    it("set the data properties in the constructor function", () => {
      const actual = new Manager(mockManager);

      expect(actual.name).toEqual("Hakel");
      expect(actual.id).toEqual("458");
      expect(actual.email).toEqual("hakelcam@gmail.com");
      expect(actual.officeNumber).toEqual("123");
    });
  });

  describe("Method tests", () => {
    it("should get the value of officeNumber", () => {
      const manager = new Manager(mockManager);
      const actual = manager.getOfficeNumber();

      expect(actual).toEqual(manager.officeNumber);
    });

    it("should get the role of the employee", () => {
      const manager = new Manager(mockManager);
      const actual = manager.getRole();

      expect(actual).toEqual("Manager");
    });
  });
});
