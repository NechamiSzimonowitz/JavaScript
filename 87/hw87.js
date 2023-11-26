class person {
    #First;
    #Last;
    #Age;
    constructor(firstName, lastName, age) {
        this.#First = firstName;
        this.#Last = lastName;
        if (age > 0 || age < 120) {
            this.#Age = age;
        }
        else {
            throw new error("age is not a correct age number")
        }
    }
    get firstName() {
        return this.#First;
    }
    get lastName() {
        return this.#Last;
    }
    get age() {
        return this.#Age;
    }

    set firstName(Name) {
        this.firstName = Name;
    }
    set lastName(Last) {
        this.lastName = Last;
    }
    set firstName(Age) {
        this.age = Age;
    }
    toString() {
        let properties = Object.entries(this);
        properties.forEach(property => {
            return (`${property[0]}, ${property[1]}`);
        })
    }

}

class Student extends person {
    #Grade;

    get grade() {
        return this.#Grade;
    }
    set grade(Grade) {
        this.grade = Grade;
    }
}