export const tableColumns = [
    {
      title: "Name",
      dataIndex: "recentTName",
      render: (value: string) => <p>{value}</p>,
    },
    {
      title: "Date",
      dataIndex: "recentTDate",
      render: (value: string) => <p>{value}</p>,
    },
    {
      title: "Amount (₵)",
      dataIndex: "recentTAmount",
      render: (value: number) => <p className="text-right font-medium">₵{value.toFixed(2)}</p>,
    }
  ];
  

export const tableData = [
    { id: 1, recentTName: "Ama Boateng", recentTDate: "2025-05-01", recentTAmount: 120.5 },
    { id: 2, recentTName: "Kwame Nkrumah", recentTDate: "2025-05-02", recentTAmount: 75.0 },
    { id: 3, recentTName: "Yaw Mensah", recentTDate: "2025-05-03", recentTAmount: 200.0 },
    { id: 4, recentTName: "Akosua Agyeman", recentTDate: "2025-05-04", recentTAmount: 90.25 },
    { id: 5, recentTName: "Kojo Antwi", recentTDate: "2025-05-05", recentTAmount: 50.0 },
    { id: 6, recentTName: "Afia Serwaa", recentTDate: "2025-05-06", recentTAmount: 310.75 },
    { id: 7, recentTName: "John Doe", recentTDate: "2025-05-07", recentTAmount: 120.0 },
    { id: 8, recentTName: "Jane Smith", recentTDate: "2025-05-08", recentTAmount: 85.99 },
    { id: 9, recentTName: "Kwaku Darko", recentTDate: "2025-05-09", recentTAmount: 150.0 },
    { id: 10, recentTName: "Efua Mensima", recentTDate: "2025-05-10", recentTAmount: 95.45 },
    { id: 11, recentTName: "Yaw Dapaah", recentTDate: "2025-05-11", recentTAmount: 60.0 },
    { id: 12, recentTName: "Linda Ofori", recentTDate: "2025-05-12", recentTAmount: 175.0 },
  ];
  
