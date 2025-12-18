type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  preferedColor?: string;
};
type ColorRGB = 'Red' | 'Green' | 'Blue'; // OR
type ColorCMYK = 'Grey' | 'Purple' | 'Yellow' | 'Black';
type PreferedColor = ColorRGB | ColorCMYK;

const person1: Person = {
  name: 'Tania',
  age: 23,
  salary: 100,
  preferedColor: 'Blue',
};

console.log(person1);

export function setPreferedColor(person: Person, color: PreferedColor): Person {
  return { ...person, preferedColor: color };
}
console.log(setPreferedColor(person1, 'Green'));
console.log(person1);
