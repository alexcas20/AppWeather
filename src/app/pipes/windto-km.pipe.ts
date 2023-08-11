import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windtoKm'
})
export class WindtoKmPipe implements PipeTransform {

  transform(speed: number  ) {
    if(speed != null){
      const speedToKm = speed * 3.6;
      return `${Math.floor(speedToKm)} km/h`; 
    }
    
    return console.log(`Ningun valor.`);
  }

}
