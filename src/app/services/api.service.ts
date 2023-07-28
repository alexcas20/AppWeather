import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private direccion = environment._APIurl;
  private key = environment._APIkey;
  

  constructor(private http: HttpClient) { }
}
