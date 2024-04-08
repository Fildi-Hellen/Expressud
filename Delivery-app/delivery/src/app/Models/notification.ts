// notification.model.ts

export interface Notification {
    id: number;
    type: string; // Order, Update, Payment, etc.
    message: string;
    timestamp: Date;
  }
  