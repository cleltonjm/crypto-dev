import { Component } from '@angular/core';
import { CryptocurrencyComponent } from "./components/cryptocurrency/cryptocurrency.component";

@Component({
  selector: 'app-root',
  imports: [CryptocurrencyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crypto-dev';
}
