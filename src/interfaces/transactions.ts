export interface RecentTransactionItem {
    recentTName: string;
    recentTDate: string;
    recentTAmount: number;
  }
  
  export interface RecentTransactionProps {
    data: RecentTransactionItem[];
  }
  