class Calculator {
  constructor(num = 0) {
    this.num = num;
  }
  add(n) {
    this.num += n;
    return this;
  }
  subtract(n) {
    this.num -= n;
    return this;
  }
  divide(n) {
    this.num /= n;
    return this;
  }
  pow(n) {
    this.num **= n;
    return this;
  }
  abs() {
    this.num = Math.abs(this.num);
    return this;
  }
  sqrt() {
    this.num = Math.sqrt(this.num);
    return this;
  }
  floor() {
    this.num = Math.floor(this.num);
    return this;
  }
  get value() {
    return this.num;
  }
}
const calc = new Calculator(5);

const result = calc.add(12).divide(2).subtract(1).sqrt().floor().value;
console.log(result);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  perimeter() {
    return this.width * 2 + this.height * 2;
  }
  area() {
    return this.width * this.height;
  }
  isSquare() {
    return this.width === this.height;
  }
}
const square = new Rectangle(20, 20);

const squareRes = square.isSquare();
console.log(squareRes);

const longRectangle = new Rectangle(100, 20);

const longRectanglePerimeter = longRectangle.perimeter();
console.log(longRectanglePerimeter);

const largeRectangle = new Rectangle(220, 320);

const largeRectangleArea = largeRectangle.area();
console.log(largeRectangleArea);

class University {
  constructor(name, departments) {
    this.name = name;
    this.departments = departments;
  }
  addDepartment(newDepartments) {
    if (Array.isArray(newDepartments)) {
      this.departments = [...this.departments, ...newDepartments];
    } else {
      this.departments.push(newDepartments);
    }
    return this;
  }
  removeDepartment(department) {
    this.departments = this.departments.filter((dep) => dep !== department);
    return this;
  }
  showDepartments() {
    return this.departments;
  }
  get departmentsCount() {
    return this.departments.length;
  }
}
const gepei = new University("gepei", ["chemistry"]);
const res = gepei
  .addDepartment(["architecture", "paxmelia"])
  .removeDepartment("architecture")
  .showDepartments();
const gepeiDepartmentsCount = gepei.departmentsCount;
console.log(res);
console.log(gepeiDepartmentsCount);

class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    return this.sound;
  }
}
const chaxvi = new Animal("chaxvi", "dra da da");
console.log(chaxvi.makeSound());

class Dog extends Animal {}
const doberman = new Dog("doberman", "woof");
console.log(doberman.makeSound());
