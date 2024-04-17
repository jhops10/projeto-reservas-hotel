import { Injectable } from '@angular/core';
import { ClienteInterface } from '../interfaces/Cliente/Cliente.interface';
import { QuartoInterface } from '../interfaces/Quarto/Quarto.interface';
import { Reserva } from '../models/Reserva/Reserva';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private cliente!: ClienteInterface;
  private quarto!: QuartoInterface;
  private reservas: Reserva[] = [];
  constructor() {}

  setCliente(cliente: any) {
    this.cliente = cliente;
  }
  getCliente(): ClienteInterface {
    return this.cliente;
  }

  setQuarto(tipoQuarto: QuartoInterface) {
    this.quarto = tipoQuarto;
  }
  getQuarto(): QuartoInterface {
    return this.quarto;
  }

  addReserva(reserva: Reserva) {
    this.reservas.push(reserva);
  }
  getReservas(): Reserva[] {
    return this.reservas;
  }
}
