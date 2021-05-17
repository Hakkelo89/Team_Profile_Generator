const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  const mockEngineer = {
    name: "Hakel",
    id: "458",
    email: "hakelcam@gmail.com",
    github: "Hakkelo89",
  };
  describe("Constructor tests", () => {
    it("should create an instance of an Engineer object", () => {
      const actual = new Engineer(mockEngineer);

      expect(actual).toBeInstanceOf(Engineer);
    });

    it("set the data properties in the constructor function", () => {
      const actual = new Engineer(mockEngineer);

      expect(actual.name).toEqual("Hakel");
      expect(actual.id).toEqual("458");
      expect(actual.email).toEqual("hakelcam@gmail.com");
      expect(actual.github).toEqual("Hakkelo89");
    });
  });

  describe("Method tests", () => {
    it("should get the value of github", () => {
      const engineer = new Engineer(mockEngineer);
      const actual = engineer.getGitHub();

      expect(actual).toEqual(engineer.gitHub);
    });

    it("should get the role of the employee", () => {
      const engineer = new Engineer(mockEngineer);
      const actual = engineer.getRole();

      expect(actual).toEqual("Engineer");
    });
  });
});
