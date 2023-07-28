enum Designation {
  Trainer = 100,
  Developer,
  Architect,
  Tester,
}

class Emp {
  designation: Designation;
}

let emp = new Emp();
emp.designation = Designation.Trainer;
console.log(Designation[emp.designation]);
