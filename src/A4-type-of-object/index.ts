const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'KeyAAA',
  keyB: 'KeyBBB',
};

console.log(objectA);

objectA.keyB = 'OLA B';
objectA.keyC = 'OLA C';
objectA.keyD = 'OLA D';

console.log(objectA);
