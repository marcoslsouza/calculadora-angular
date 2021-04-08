import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor(private calculadoraService: CalculadoraService) { }

  // Chamado logo que o objeto é instanciado.
  // Para instanciação mais pesada, que vai impactar
  ngOnInit(): void {
  }

}
