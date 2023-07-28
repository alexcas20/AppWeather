import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 
  arrayWeather: any;

  arrayCities = [
    'Mexico City',
    'London',
    'Madrid',
    'Bogota'

  ];

  imagesWeather = [
    {
      name: 'overcast clouds',
      url:  'https://cdn-icons-png.flaticon.com/512/7084/7084486.png'
    }
   
  ]

  dataTotal: any[] = [];



  constructor(private api : ApiService) { }

  ngOnInit(): void {

    this.arrayCities.forEach(el => {
      this.api.getCity(el)
      .subscribe(resp => {
       
        console.log('Response => ', resp);
      
        this.dataTotal.push(resp)

       this.dataTotal.map(e => {
        if(e.name === el ){
          e.weather = resp.weather[0]
        } 
       })
        
        // this.arrayWeather = this.dataW.weather[0];
        // this.dataTotal.push(this.arrayWeather);
        // console.log('arrayWeather => ', this.arrayWeather);
      } )
    })

    console.log(this.dataTotal)

    
  }
  

}
