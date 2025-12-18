enum Colors {
  RED = 10,
  GREEN = 20,
  BLUE = 50,
}
enum Colors {
  PURPLE = 'P',
  GREY = 201,
  YELLOW,
}
console.log(Colors);

function chooseColor(color: Colors): void {
  console.log(color);
}
chooseColor(Colors.BLUE);
