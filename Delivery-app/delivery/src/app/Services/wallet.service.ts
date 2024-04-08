import { Injectable } from '@angular/core';
import { Observable,  map,  of } from 'rxjs';
import { Transaction } from '../Models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor() { }

  getBalance(): Observable<number> {
    return of(this.balance);
  }

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactions);
  }

  addFunds(amount: number): Observable<void> {
    this.balance += amount;
    this.transactions.push({ amount, date: new Date(), type: 'Deposit' });
    return of(null).pipe(map(() => null as unknown as void)); // Convert null to unknown first
  }

  withdrawEarnings(amount: number): Observable<void> {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({ amount, date: new Date(), type: 'Withdrawal' });
    }
    return of(null).pipe(map(() => null as unknown as void)); // Convert null to unknown first
  }
}
