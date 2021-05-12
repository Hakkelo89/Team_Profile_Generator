const Employee = require("../src/lib/Employee");

describe("Employee", () => {
  const mockEmployee = {
    name: "Bob",
    id: 451,
    email: "bob@codeworks.co.uk",
  };
  describe("constructor tests", () => {
    test("should construct a new instance of an employee class", () => {
      const employee = new Employee(mockEmployee);
      expect(employee).toBeInstanceOf(Employee);
    });
    test("should construct a new instance of an employee class with name, id, email", () => {
      const employee = new Employee(mockEmployee);
      expect(employee).toEqual({
        name: "Bob",
        id: 451,
        email: "bob@codeworks.co.uk",
      });
    });
  });
  describe("method tests", () => {
    test("should return id when the getId method is called", () => {
      const employee = new Employee(mockEmployee);
      expect(employee.getId()).toEqual(451);
    });

    test("should return name when the getName method is called", () => {
      const employee = new Employee(mockEmployee);
      expect(employee.getName()).toEqual("Bob");
    });

    test("should return email when the getEmail method is called", () => {
      const employee = new Employee(mockEmployee);
      expect(employee.getEmail()).toEqual("bob@codeworks.co.uk");
    });
  });
});
