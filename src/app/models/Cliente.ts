import { ClienteInterface } from '../interfaces/Cliente.interface';

export abstract class ClienteAbstract implements ClienteInterface {
  constructor(public nome: string, public tipo: string) {}

  mensagemParabens(): string {
    return '';
  }
}
