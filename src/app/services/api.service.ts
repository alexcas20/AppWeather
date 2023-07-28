import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Weather } from '../interfaces/weather-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = `https://api.openweathermap.org/data/2.5/weather`
  private key = environment._APIkey;
  

  constructor(private http: HttpClient) { }

  //Example petition
  getCity(city: string): Observable<Weather>{

      return this.http.get<Weather>(this.url, {
        params: {
          q: city,
          appid: this.key
        }
      })
    }
  }




