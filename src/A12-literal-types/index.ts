let a = 10;
console.log(a);

a = 0b1010;
console.log(a);

const b = 10;
console.log(b);

const c = 100;
console.log(b);

const persona = {
  name: 'Tania' as const,
  subname: 'Guedes',
};


export function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}

console.log(chooseColor('Blue'), persona, a, b,c);