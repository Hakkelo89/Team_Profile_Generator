const Employee = require("../src/lib/Employee");

describe("Employee class", () => {
  const mockEmployee = {
    name: "Suraj",
    id: "123",
    email: "suraj@email.com",
  };
  describe("Constructor tests", () => {
    it("should create an instance of an Employee object", () => {
      const actual = new Employee(mockEmployee);

      expect(actual).toBeInstanceOf(Employee);
    });

    it("set the data properties in the constructor function", () => {
      const actual = new Employee(mockEmployee);

      expect(actual.name).toEqual("Suraj");
      expect(actual.id).toEqual("123");
      expect(actual.email).toEqual("suraj@email.com");
    });
  });

  describe("Method tests", () => {
    it("should get the value of name", () => {
      const employee = new Employee(mockEmployee);
      const actual = employee.getName();

      expect(actual).toEqual(employee.name);
    });

    it("should get the ID of the employee", () => {
      const employee = new Employee(mockEmployee);
      const actual = employee.getId();

      expect(actual).toEqual(employee.id);
    });

    it("should get the email of the employee", () => {
      const employee = new Employee(mockEmployee);
      const actual = employee.getEmail();

      expect(actual).toEqual(employee.email);
    });
  });
});
