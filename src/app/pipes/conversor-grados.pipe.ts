import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversorGrados'
})
export class ConversorGradosPipe implements PipeTransform {

  transform( kelvin: number) {

    if(kelvin !== null){
      const gradosCelsius = kelvin - 273.155;
    
      return  `${Math.floor(gradosCelsius)} °C`;
    }

    return;

 
  }

}
