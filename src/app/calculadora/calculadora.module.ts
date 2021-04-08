import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components'; // Foi utilizado o encurtamento de diretorios "calculadora/components/index.ts"
import { CalculadoraService } from './services';


@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
