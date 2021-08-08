import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICalcResponse } from '../interface/calc-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    
  }

  getCalcResult(expression: string): Observable<ICalcResponse> {
    let params = encodeURIComponent(expression);
    
    return this.http.get<ICalcResponse>(this.baseUrl + `calculation?expression=${params}`);
  }

}
