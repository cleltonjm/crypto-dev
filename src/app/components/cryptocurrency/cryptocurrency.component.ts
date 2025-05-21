import { Component } from '@angular/core';
import { CryptoService, Crypto } from '../../services/crypto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cryptocurrency',
  imports: [CommonModule],
  templateUrl: './cryptocurrency.component.html',
  styleUrl: './cryptocurrency.component.scss'
})
export class CryptocurrencyComponent {
  cryptos: Crypto[] = [];
  isLoading = true;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getCryptoMarkets('usd', 20, 1).subscribe({
      next: (data) => {
        this.cryptos = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}
