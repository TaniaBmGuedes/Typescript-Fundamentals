interface TypeOfName {
  name: string;
}

interface TypeOfSubname {
  subname: string;
}

interface TypeOfCompletedName {
  completedName(): string;
}

type TypeOfPerson = TypeOfName & TypeOfSubname & TypeOfCompletedName;
interface TypeOfPerson2 extends TypeOfName, TypeOfSubname, TypeOfCompletedName {}

export class Person implements TypeOfPerson2 {
  constructor(public name: string, public subname: string) {}

  completedName(): string {
    return this.name + ' ' + this.subname;
  }
}

const personObjg: TypeOfPerson2 = {
  completedName() {
    return this.name + ' ' + this.subname;
  },
  name: 'Tania',
  subname: 'now it is ok',
};

const person = new Person('Tania', 'Guedes');
console.log(person.completedName());
console.log(personObjg.completedName());