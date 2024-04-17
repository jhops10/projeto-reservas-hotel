import { QuartoInterface } from '../../interfaces/Quarto/Quarto.interface';

export abstract class QuartoAbstract implements QuartoInterface {
  constructor(public tipo: string, public valor: number) {}
}
