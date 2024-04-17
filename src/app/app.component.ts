import { Component, OnInit } from '@angular/core';
import { QuartoInterface } from './interfaces/Quarto/Quarto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  cliente = { nome: '' };
  tipoCliente: string = 'normal';
  quarto!: QuartoInterface;
  tipoQuarto: string = '';
  quantidadeDias!: number;

  ngOnInit(): void {}

  fazerReserva(): void {
    console.log(
      this.cliente.nome,
      this.tipoCliente,
      this.tipoQuarto,
      this.quantidadeDias
    );
  }
}
