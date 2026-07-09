class Student {
  constructor(
    private _name: string,
    private _marks: number
  ) {}

  // Getter
  get name(): string {
    return this._name;
  }

  // Setter
  set name(value: string) {
    this._name = value;
  }

  // Getter
  get marks(): number {
    return this._marks;
  }

  // Setter
  set marks(value: number) {
    if (value >= 0 && value <= 100) {
      this._marks = value;
    } else {
      console.log("Invalid marks!");
    }
  }
}

const student = new Student("Rahul", 80);

console.log(student.name);   // Rahul
console.log(student.marks);  // 80

student.name = "Amit";
student.marks = 95;

console.log(student.name);   // Amit
console.log(student.marks);  // 95

student.marks = 120;         // Invalid marks!