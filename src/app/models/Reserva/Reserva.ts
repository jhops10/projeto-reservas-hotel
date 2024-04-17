import { ClienteInterface } from '../../interfaces/Cliente/Cliente.interface';
import { QuartoInterface } from '../../interfaces/Quarto/Quarto.interface';

export class Reserva {
  constructor(
    public cliente: ClienteInterface,
    public quarto: QuartoInterface,
    public quantidadeDias: number
  ) {}

  public valorTotal(): number {
    return this.quarto.valor * this.quantidadeDias;
  }

  public detalhesReserva(): string {
    return `Reserva feita por ${this.cliente.nome}, para um quarto ${
      this.quarto.tipo
    } por ${
      this.quantidadeDias
    } dias. O valor total é de: R$ ${this.valorTotal()}. ${this.cliente.mensagemParabens()}`;
  }
}
