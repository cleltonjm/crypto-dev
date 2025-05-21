import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: string;
  market_cap: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

@Injectable({
  providedIn: 'root'
})

export class CryptoService {
  private API_URL ='https://api.coingecko.com/api/v3/coins/markets';

  constructor(private http: HttpClient) {}

  getCryptoMarkets(vsCurrency: string = 'usd', perPage: number = 10, page: number = 1): Observable<Crypto[]> {
    const params = new HttpParams()
      .set('vs_currency', vsCurrency)
      .set('order', 'market_cap_desc')
      .set('per_page', perPage.toString())
      .set('page', page.toString())
      .set('sparkline', 'false');

    return this.http.get<Crypto[]>(this.API_URL, { params });
  }
}
