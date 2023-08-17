
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    printInfo() {
        console.log(`Name: ${this.name}\nSurname: ${this.surname}`);
    }
}

const person = new Person("John", "Doe");

person.printInfo();
