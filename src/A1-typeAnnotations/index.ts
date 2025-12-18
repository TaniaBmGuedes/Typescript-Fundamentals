/* eslint-disable */

//type annotation - >let name: string
const name: string = 'Tania';
const age: number = 0b1010;
const adult: boolean = true;
const simbol: symbol = Symbol('any-symbol');
// let big: bigint = 10n; // bigint

//Arrays
const arrayOfNumbers: Array<number> = [1, 2, 3];
const arrayofNumbers2: number[] = [1, 2, 3];
const arrayofStrings: Array<string> = ['a', 'b'];
const arrayofStrings2: string[] = ['a', 'b'];

//Objects
let person: { name: string; age: number; adult?: boolean } = {
  age: 30,
  name: 'Tania',
};

// Functions
function summ(x: number, y: number): number {
  return x + y;
}
const summ2: (x: number, y: number) => number = (x, y) => x + y;

// Module mode
const lesson1 = {
  name,
  age,
  adult,
  simbol,
  arrayOfNumbers,
  arrayofNumbers2,
  arrayofStrings,
  arrayofStrings2,
  person,
  summ,
  summ2,
};

export default lesson1;
