import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Promotion} from "../models/Promotion";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  /*private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  addPromotionToStock(promotion: Promotion, stockId: number): Observable<Promotion> {
    const url = `${this.apiUrl}/addPromotionToStock/stockid/${stockId}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Promotion>(url, promotion, httpOptions);
  }*/
}
