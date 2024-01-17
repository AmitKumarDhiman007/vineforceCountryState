import { Component } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-iso',
  templateUrl: './country-iso.component.html',
  styleUrls: ['./country-iso.component.css']
})
export class CountryISOComponent {

  CountryRecord = {
    name: '',
    ISO: ''    
  };
  constructor(
    private countryservice: CountryService
  ) { }
  countryList: any = [];
  ngOnInit() {
    debugger;
    this.countryservice.getAllData()
      .subscribe(data => {
        debugger;
        console.log(data)
        this.countryList=data;
      })
  } 
}
