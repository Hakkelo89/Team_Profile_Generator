const Intern = require("../lib/Intern");

describe("Intern class", () => {
  const mockIntern = {
    name: "Hakel",
    id: "458",
    email: "hakelcam@gmail.com",
    school: "University of Birmingham",
  };
  describe("Constructor tests", () => {
    it("should create an instance of an Intern object", () => {
      const actual = new Intern(mockIntern);

      expect(actual).toBeInstanceOf(Intern);
    });

    it("set the data properties in the constructor function", () => {
      const actual = new Intern(mockIntern);

      expect(actual.name).toEqual("Hakel");
      expect(actual.id).toEqual("458");
      expect(actual.email).toEqual("hakelcam@gmail.com");
      expect(actual.school).toEqual("University of Birmingham");
    });
  });

  describe("Method tests", () => {
    it("should get the value of school", () => {
      const intern = new Intern(mockIntern);
      const actual = intern.getSchool();

      expect(actual).toEqual(intern.school);
    });

    it("should get the role of the employee", () => {
      const intern = new Intern(mockIntern);
      const actual = intern.getRole();

      expect(actual).toEqual("Intern");
    });
  });
});
