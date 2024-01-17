import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
//import { Country } from ';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  CountryRecord = {
    name: '',
    ISO: ''    
  };
  constructor(
    private countryservice: CountryService
  ) { }
  countryList: any = [];
  countdata:any;
  displayStyle = "none"; 
  displaylist="block";
  Countrydetails=Country;
  Country_name:any;
  //countryList:Country;

  ngOnInit() {
    debugger;
    this.countryservice.getAllData()
      .subscribe(data => {
        debugger;
        console.log(data)
        this.countryList=data;
      })
  } 
  
  openPopup() { 
    this.displayStyle = "block"; 
    this.displaylist="none";
  } 
  closePopup() { 
    this.displayStyle = "none"; 
    this.displaylist="block";
  } 
  SaveData()
  {
    debugger
    const data = {
      name: this.CountryRecord.name,
      ISO: this.CountryRecord.ISO
    };
    if(data.name=="" || data.ISO=="")
    {
alert("please enter name and iso.");
return;
    }
    else
    {
   // this.countryservice.getAllData()
    this.countryservice.create(data).subscribe(
        response => {
          this.countryservice.getAllData()
          .subscribe(data => {
            debugger;
            console.log(data)
            alert("Record save");
            this.countryList=data;
            this.displayStyle = "none"; 
    this.displaylist="block";
            this.CountryRecord.name="";
       this.CountryRecord.ISO="";
          })
        },
        error => {
          console.log(error);
        });

console.log(data);
      }
    }
    deleteRow(name:any){
      alert(name);
      this.countryservice.deleteCountry(name).subscribe(
        response => {
          this.countryservice.getAllData()
          .subscribe(data => {
            debugger;
            console.log(data)
            alert("Record delete");
            this.countryList=data;
            this.displayStyle = "none"; 
    this.displaylist="block";
            this.CountryRecord.name="";
       this.CountryRecord.ISO="";
          })
        },
        error => {
          console.log(error);
        });
    }
      }
  
