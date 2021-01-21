import { Component, Input, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-myynti',
  templateUrl: './myynti.component.html',
  styleUrls: ['./myynti.component.css']
})
export class MyyntiComponent implements OnInit {

  poydanNumero = '';
  myyntiMaara = '';
  faCoffee = faCoffee;
  @Input('tarjoilijalle') ohje: {tyo:string, poydanNumero:string, myyntiMaara:string};

  constructor() { }

  ngOnInit(): void {
  }

  kahviaMyyty() {
  /*  this.tarjoiluOhje.push({
      tyo: 'myyty',
      poydanNumero: this.poydanNumero,
      myyntiMaara: this.myyntiMaara
    }); */
  }

  kahviaTarjoiltu() {
  /*  this.tarjoiluOhje.push({
      tyo: 'tarjoiltu',
      poydanNumero: this.poydanNumero,
      myyntiMaara: this.myyntiMaara
    }); */
  }
}
