import { ClienteAbstract } from './Cliente';

export class ClienteNormal extends ClienteAbstract {
  constructor(nome: string, tipo: string) {
    super(nome, tipo);
  }
}
