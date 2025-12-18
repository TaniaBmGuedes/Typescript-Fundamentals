//Can be imutable
const dataOfClient1: readonly [number, string] = [1, 'Tania'];
const dataOfClient2: [number, string, string] = [1, 'Tania', 'Guedes'];
const dataOfClient3: readonly [number, string,string?] = [1, 'Tania'];
const dataOfClient4: readonly [number, string, ...string[]] = [1, 'Tania',"Guedes","Porto"];

dataOfClient2[1] = 'Guilherme';
dataOfClient2[2] = 'Garrucho';

console.log(dataOfClient1);
console.log(dataOfClient2);
console.log(dataOfClient3);
console.log(dataOfClient4);


const array1: readonly string[] = ['Tania', 'Guedes'];
const array2: ReadonlyArray<string> = ['123', '123'];

console.log(array1);
console.log(array2);