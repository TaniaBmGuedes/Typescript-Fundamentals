// Array<T> - T[]
function multipleArgs(...args: Array<number>) {
  return args.reduce((acc, value) => acc * value, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((acc, value) => acc + value);
}

export function toUpperCase(...args: string[]): string[] {
   return args.map((value)=>value.toLocaleUpperCase())
}

const result = multipleArgs(1, 2, 3);
console.log(result);

const resultString = concatenaString("1", "2", "3");
console.log(resultString);

const upper = toUpperCase('a', 'b', 'c');
console.log(upper);