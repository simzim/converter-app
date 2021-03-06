
import { UnitPrefix } from './../model/unit-prefix';
import {HttpClient} from '@angular/common/http'


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrefixesServiceService {
  private apiUrl ='http://localhost:3000/prefixes';
  constructor(private http:HttpClient) { }

  getPrefixes() : Observable<UnitPrefix[]>{

    return this.http.get<UnitPrefix[]>(this.apiUrl);
  }




}


