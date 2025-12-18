//we ,ust only use any in last case
type Printable = string | number | boolean | Array<unknown> | object;

function describeMessage(msg: Printable): string {
  const kind = Array.isArray(msg) ? 'array' : typeof msg;
  const value = Array.isArray(msg) ? JSON.stringify(msg) : String(msg);
  return `[${kind}] ${value}`;
}

console.log(describeMessage([1, 2, 3]));
console.log(describeMessage('Olá'));
console.log(describeMessage(1));
