class Student {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + " " + lastName;
  }
}

function greetStudent(student: Student) {
  return "Helloz " + student.fullName + "! How are you doing?";
}

let student = new Student("Prakhar", "Tripathi");

document.body.textContent = greetStudent(student);
