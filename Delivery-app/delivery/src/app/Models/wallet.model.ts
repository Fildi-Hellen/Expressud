export interface Transaction {
    amount: number;
    date: Date;
    type: string; // 'Deposit' or 'Withdrawal'
  }