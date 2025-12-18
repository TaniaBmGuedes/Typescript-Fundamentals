function withoutReturn(...args: string[]): void {
  console.log(args.join(' '));
}
const person = {
  name: 'Tania',
  subname: 'Guedes',

  showName(): void {
    console.log(this.name + ' ' + this.subname);
  },
};
withoutReturn('Guilherme', 'Garrucho');
person.showName();