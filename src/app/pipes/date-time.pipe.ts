import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: any, timeZone= Number(localStorage.getItem('timeZone'))): any {
    timeZone 
    if(value != null){

      const clientOffset = new Date().getTimezoneOffset();
      const offsetTimestamp = (value + (clientOffset * 60) + timeZone)
      const date = new Date(offsetTimestamp * 1000);

      const formatTime = date.toLocaleString('en-US', {
        hour: 'numeric', minute: 'numeric', hour12: true
      })
  
      return formatTime;
 
    }
    
  }

}
