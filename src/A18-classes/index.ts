export class MyCompany {
  public readonly name: string; 
  private readonly colaborators: Colaborator[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.name = nome;
    this.cnpj = cnpj;
  }

  addColab(col: Colaborator): void {
    this.colaborators.push(col);
  }

  showColabs(): void {
    for (const colab of this.colaborators) {
      console.log(colab);
    }
  }
}

export class Colaborator {
  constructor(
    public readonly name: string,
    public readonly subname: string,
  ) {}
}

const company = new MyCompany('Udemy', '11.111.111/0001-11');
const colab1 = new Colaborator('Luiz', 'Otávio');
const colab1colab1 = new Colaborator('Maria', 'Miranda');
const colaab1colaab1colaab1 = new Colaborator('João', 'Vieira');
company.addColab(colab1);
company.addColab(colab1colab1);
company.addColab(colaab1colaab1colaab1);
console.log(company);
company.showColabs();