import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../Models/wallet.model';
import { WalletService } from '../../Services/wallet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent implements OnInit {
  balance!: number;
  transactions!: Transaction[];

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
    this.loadBalance();
    this.loadTransactions();
  }

  loadBalance(): void {
    this.walletService.getBalance()
      .subscribe(balance => this.balance = balance);
  }

  loadTransactions(): void {
    this.walletService.getTransactions()
      .subscribe(transactions => this.transactions = transactions);
  }

  addFunds(amount: number): void {
    this.walletService.addFunds(amount)
      .subscribe(() => {
        this.loadBalance();
        this.loadTransactions();
      });
  }

  withdrawEarnings(amount: number): void {
    this.walletService.withdrawEarnings(amount)
      .subscribe(() => {
        this.loadBalance();
        this.loadTransactions();
      });
  }

}
