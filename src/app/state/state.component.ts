import { Component } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {
  CountryRecord = {
    ISO: ''    
  };

  STATERecord = {
    STATENAME: '',
    ISO: '',
    COUNTRYID:''    
  };
  constructor(
    private countryservice: CountryService
  ) { }
  countryList: any = [];
  StateList: any = [];
  countryname:any;
  displayStyle = "none"; 
  displaylist="block";

  ngOnInit() {
    debugger;
    this.countryservice.getAllData()
      .subscribe(data => {
        debugger;
        console.log(data)
        this.countryList=data;
      })
  }
  SearchCountry()
  {
    const data = {
      ISO: this.CountryRecord.ISO
      // ISO: this.CountryRecord.ISO
    };
    debugger;
console.log(data);

this.countryservice.GetStatesFilter(data.ISO).subscribe(
  (  response: any)=> {
    console.log(response);
       this.StateList=response;
  },
  (  error: any) => {
    console.log(error);
  });
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
    const data = {
      STATENAME: this.STATERecord.STATENAME,
      ISO: this.STATERecord.ISO,
      COUNTRYID:this.STATERecord.COUNTRYID
    };

    if(data.STATENAME=="" || data.ISO=="" || data.COUNTRYID=="")
    {
alert("please enter name,COUNTRYID and iso.");
return;

    }
    else
    {
   // this.countryservice.getAllData()
    this.countryservice.createSTATE(data).subscribe(
        response => {
    
    alert("Record save");
   
          });
  }
}

deleteRow(name:any){
  alert(name);
  this.countryservice.deleteState(name).subscribe(
    response => {
      this.countryservice.getAllData()
      .subscribe(data => {
        debugger;
        console.log(data)
        alert("Record delete");
        this.countryList=data;
        this.displayStyle = "none"; 
        this.displaylist="block";
       // this.CountryRecord.name="";
  // this.CountryRecord.ISO="";
      })
    },
    error => {
      console.log(error);
    });
}
}

