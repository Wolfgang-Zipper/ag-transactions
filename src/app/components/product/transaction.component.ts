import { Component, Input } from "@angular/core";
import { ITransaction } from "src/app/models/transaction";

@Component (
    {
        selector: 'app-transaction',
        templateUrl: './transaction.component.html',
        styleUrls: ['./transaction.component.scss']

    })



    export class TransactionComponent {

        @Input() transaction: ITransaction

        details = false
    }