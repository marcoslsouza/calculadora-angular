import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components'; // Foi utilizado o encurtamento de diretorios "calculadora/components/index.ts"



@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraComponent
  ]
})
export class CalculadoraModule { }
