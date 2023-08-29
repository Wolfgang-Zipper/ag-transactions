import { Component } from '@angular/core';
import { ITransaction } from './models/transaction';
import {transaction as data} from './data/transactions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-test';
  transactionx: ITransaction[] = data
}
