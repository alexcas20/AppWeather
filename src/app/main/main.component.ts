import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getCity()
      .subscribe(resp => console.log('Response => ', resp))
  }

}
