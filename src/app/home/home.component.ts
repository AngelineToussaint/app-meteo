import { Component, OnInit } from '@angular/core';
import {MeteoService} from '../meteo/meteo.service';
import {Meteo} from '../meteo/meteo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Bonjour';
  meteo: Meteo;
  weather = {
    clouds: "Nuageux",
    clear: "Ensoleillé",
    rain: "Pluie",
    mist: "Partiellement couvert",
    thunderstorm: "Orageux",
    snow: "Neigeux"
  }
  actualWeather: string;

  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
  }

  getBySearch(search: string) {
    this.meteoService.getBySearch(search)
      .subscribe(res => {
        if (res.list.length > 0) {
          this.meteo = res.list[0];

          this.actualWeather = this.meteo.weather[0].main
        }
      })
  }
}
