import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';
import { State } from './state';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }
  private baseURL = `http://localhost:56212/api/VineCurd`
  
  getAllData(): Observable<Country[]> {
    debugger;
    return this.http.get<Country[]>(this.baseURL + '/GetCountriesList'); 
 }

 create(data: any): Observable<any> {
  debugger;
  return this.http.post(`${this.baseURL}/AddNewCountry`, data)
}
updateData(data: any, id: string): Observable<any> {
  return this.http.patch(`${this.baseURL}/update/${id}`, data)
}
deleteCountry(id: string): Observable<any> {
  return this.http.delete(`${this.baseURL}/DeleteCountry?CountryName=${id}`)
}
///api/student?id=1
GetStatesFilter(CountryId:any):Observable<State[]> {
  debugger;
  return this.http.get<State[]>(`${this.baseURL}/GetStatesListByFilter?ISO=${CountryId}`); 
}
createSTATE(data:any): Observable<any> {
  debugger;
  return this.http.post(`${this.baseURL}/AddNewState`, data)
}
deleteState(id: string): Observable<any> {
  return this.http.delete(`${this.baseURL}/DeleteState?StateName=${id}`)
}
}
