import { ClienteInterface } from './interfaces/Cliente/Cliente.interface';
import { Component, OnInit } from '@angular/core';
import { QuartoInterface } from './interfaces/Quarto/Quarto.interface';
import { HotelService } from './services/hotel.service';
import { ClienteNormal } from './models/Cliente/ClienteNormal';
import { ClienteVip } from './models/Cliente/ClienteVip';
import { QuartoSimples } from './models/Quarto/QuartoSimples';
import { QuartoLuxo } from './models/Quarto/QuartoLuxo';
import { Reserva } from './models/Reserva/Reserva';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  clienteInput = { nome: '' };
  cliente!: ClienteInterface;
  tipoCliente: string = 'normal';
  quarto!: QuartoInterface;
  tipoQuarto: string = '';
  quantidadeDias!: number;

  constructor(public hotelService: HotelService) {}

  criarCliente(): void {
    if (this.tipoCliente === 'normal') {
      this.cliente = new ClienteNormal(this.clienteInput.nome, 'Normal');
      this.tipoQuarto = 'simples';
    } else if (this.tipoCliente === 'vip') {
      this.cliente = new ClienteVip(this.clienteInput.nome, 'VIP');
      this.tipoQuarto = 'luxo';
    }

    this.hotelService.setCliente(this.cliente);
    this.escolherQuarto();
  }

  ngOnInit(): void {}

  escolherQuarto(): void {
    if (this.tipoQuarto === 'simples') {
      this.quarto = new QuartoSimples();
    } else if (this.tipoQuarto === 'luxo') {
      this.quarto = new QuartoLuxo();
    }

    this.hotelService.setQuarto(this.quarto);
  }

  fazerReserva(): void {
    this.criarCliente();
    let cliente = this.hotelService.getCliente();
    let quarto = this.hotelService.getQuarto();
    let reserva = new Reserva(cliente, quarto, this.quantidadeDias);
    this.hotelService.addReserva(reserva);
    this.clienteInput.nome = '';
    this.quantidadeDias = 1;
  }
}
