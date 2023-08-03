import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversorGrados'
})
export class ConversorGradosPipe implements PipeTransform {

  transform( kelvin: number): unknown {

    console.log('valor de kelvin: ', kelvin)
    if(kelvin !== null){
      const gradosCelsius = kelvin - 273.155;
    
      return  `${Math.floor(gradosCelsius)} °C`;
    }

    return console.log(`Ningun valor en temp.`);

 
  }

}
