var Designation;
(function (Designation) {
    Designation[Designation["Trainer"] = 100] = "Trainer";
    Designation[Designation["Developer"] = 101] = "Developer";
    Designation[Designation["Architect"] = 102] = "Architect";
    Designation[Designation["Tester"] = 103] = "Tester";
})(Designation || (Designation = {}));
var Emp = /** @class */ (function () {
    function Emp() {
    }
    return Emp;
}());
var emp = new Emp();
emp.designation = Designation.Trainer;
console.log(Designation[emp.designation]);
