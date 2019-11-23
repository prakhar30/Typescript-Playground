var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greetStudent(student) {
    return "Helloz " + student.fullName + "! How are you doing?";
}
var student = new Student("Prakhar", "Tripathi");
document.body.textContent = greetStudent(student);
