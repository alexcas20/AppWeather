import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  busqueda = '';
  dataWeather : any;
  weatherCard = '../../assets/img/weatherCard-icon.png'

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
  loading: boolean = false;
 

    @HostListener('window:scroll', []) omWindowScroll() {
      this.scrollFunction();
    }
    


  constructor(private api : ApiService,
    private scroll: ViewportScroller) { }

  ngOnInit(): void {

    this.arrayCities.forEach(el => {
      this.api.getCity(el)
      .subscribe(resp => {
       
  
      
        this.dataTotal.push(resp)

       this.dataTotal.map(e => {
        if(e.name === el ){
          e.weather = resp.weather[0]
        } 
       })
        
        
      } )
    })

    
  }

  search(e:any){
   
    if(e.key === 'Enter'){
      this.searchCity()
    }
  }

  searchCity() {
 
    const city = this.busqueda.toLowerCase();
    this.api.getCity(city)
      .subscribe(resp => {
        this.loading = true;
        setTimeout(() => {
       
        this.dataWeather = resp;
        localStorage.setItem('timeZone', resp.timezone.toString());
   
        this.weatherCard = `https://openweathermap.org/img/wn/${this.dataWeather.weather[0].icon}@2x.png`;

        this.loading = false;

        }, 2000)

        
        
      },(error) => {
         
Swal.fire({
  icon: 'error',
  title: `Not found info for ${city}`,
  text: `Please enter a valid city`,
 
})
      })
      
      this.busqueda = '';
  }


  showDataCity(city: string){

    if(city === this.dataWeather?.name){
        Swal.fire({
          title: 'This City was selected yet',
          text: 'Choose another city',
          icon:'info'
        })
        this.scrollToTop();
    } else {
      this.api.getCity(city)
      .subscribe(resp => {
        this.loading = true;
        this.scrollToTop(400);
        setTimeout(() => {
          this.dataWeather = resp;

          this.loading = false;
        },2000)
        
      })

    }
    
  }


  scrollFunction(){
    const btn = document.getElementById('myBtn');
    const section = document.querySelectorAll('.showSection');
    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
      btn!.style.display = 'block';
    } else {
      btn!.style.display = 'none'
    }

   

    
  
  }

  scrollToTop(pos = 0){
    if(pos != 0 ){
      document.body.scrollTop = 200; // For Safari
      document.documentElement.scrollTop = 400; // For Chrome, Firefox, IE and Opera
    }
    else {
      document.body.scrollTop = pos; // For Safari
      document.documentElement.scrollTop = pos; // For Chrome, Firefox, IE and Opera
    }
   
}

  
  

}

