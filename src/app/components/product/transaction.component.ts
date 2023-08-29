import { Component, Input } from "@angular/core";
import { ITransaction } from "src/app/models/transaction";

@Component (
    {
        selector: 'app-transaction',
        templateUrl: './transaction.component.html'
    })



    export class TransactionComponent {

        @Input() transact: ITransaction
    }