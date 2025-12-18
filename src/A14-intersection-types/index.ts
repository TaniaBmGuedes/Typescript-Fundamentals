type HaveName = { name: string };
type HavveSubName = { subname: string };
type HaveAge = { age: number };
type Person = HaveName & HavveSubName & HaveAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

const personaa: Person = {
  name: 'Tania',
  subname: 'Guedes',
  age: 23,
};

console.log(personaa);
