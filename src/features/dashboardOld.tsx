// import { FC } from "react";
// import { CustomTable } from "@/components";
// import { tableColumns, tableData } from "@/config/tableColumns";
// import { DashboardBanner } from "@/components/cards";
// import { WeeklyChart } from "@/components/weeklyChart";
// import { RecentTransaction } from "@/components/recentTransaction";

// export const Dashboard: FC = () => {
//   const cardData = [
//     {
//       headerTitle: "Total",
//       cardPercentage: "+" + 84,
//       cardValue: "30,750",
//       chartData: [20, 10, 30, 15, 35],
//       series: [
//         {
//           name: "Transactions",
//           data: [20, 10, 30, 15, 35, 21, 42, 50, 100],
//         },
//       ],
//     },
//     {
//       headerTitle: "Pending",
//       cardPercentage: "+" + 39,
//       cardValue: "10,050",
//       chartData: [12, 18, 24, 16],
//       series: [
//         {
//           name: "Transactions",
//           data: [20, 10, 30, 15, 35, 15, 30, 50, 70, 90],
//         },
//       ],
//     },
//     {
//       headerTitle: "Failed",
//       cardPercentage: "" + 5,
//       cardValue: 234,
//       chartData: [5, 8, 10, 7, 6, 30, 20, 12, 15, 30],
//       series: [
//         {
//           name: "Transactions",
//           data: [20, 10, 30, 15, 35, 30, 2, 3, 0],
//         },
//       ],
//     },
//     {
//       headerTitle: "Success",
//       cardPercentage: "+" + 45,
//       cardValue: "1,740",
//       chartData: [5, 8, 10, 7, 6, 30, 20, 12, 15, 30],
//       series: [
//         {
//           name: "Transactions",
//           data: [20, 10, 30, 15, 35, 30, 15, 35, 20],
//         },
//       ],
//     },
//   ];

//   const transactionData = [
//     {
//       recentTName: "Ama Boateng",
//       recentTDate: "2025-05-01",
//       recentTAmount: 120.5,
//     },
//     {
//       recentTName: "Kwame Nkrumah",
//       recentTDate: "2025-05-02",
//       recentTAmount: 75.0,
//     },
//     {
//       recentTName: "Yaw Mensah",
//       recentTDate: "2025-05-03",
//       recentTAmount: 200.0,
//     },
//     {
//       recentTName: "Akosua Agyeman",
//       recentTDate: "2025-05-04",
//       recentTAmount: 90.25,
//     },
//     {
//       recentTName: "Kojo Antwi",
//       recentTDate: "2025-05-05",
//       recentTAmount: 50.0,
//     },
//     {
//       recentTName: "Afia Serwaa",
//       recentTDate: "2025-05-06",
//       recentTAmount: 310.75,
//     },
//     {
//       recentTName: "John Doe",
//       recentTDate: "2025-05-07",
//       recentTAmount: 120.0,
//     },
//     {
//       recentTName: "Jane Smith",
//       recentTDate: "2025-05-08",
//       recentTAmount: 85.99,
//     },
//     {
//       recentTName: "Kwaku Darko",
//       recentTDate: "2025-05-09",
//       recentTAmount: 150.0,
//     },
//     {
//       recentTName: "Efua Mensima",
//       recentTDate: "2025-05-10",
//       recentTAmount: 95.45,
//     },
//     {
//       recentTName: "Yaw Dapaah",
//       recentTDate: "2025-05-11",
//       recentTAmount: 60.0,
//     },
//     {
//       recentTName: "Linda Ofori",
//       recentTDate: "2025-05-12",
//       recentTAmount: 175.0,
//     },
//     {
//       recentTName: "Michael Tetteh",
//       recentTDate: "2025-05-13",
//       recentTAmount: 210.1,
//     },
//     {
//       recentTName: "Gifty Hammond",
//       recentTDate: "2025-05-14",
//       recentTAmount: 95.6,
//     },
//     {
//       recentTName: "Daniel Opoku",
//       recentTDate: "2025-05-15",
//       recentTAmount: 142.0,
//     },
//     {
//       recentTName: "Sarah Addo",
//       recentTDate: "2025-05-16",
//       recentTAmount: 305.5,
//     },
//     {
//       recentTName: "Richard Owusu",
//       recentTDate: "2025-05-17",
//       recentTAmount: 89.99,
//     },
//     {
//       recentTName: "Emelia Asante",
//       recentTDate: "2025-05-18",
//       recentTAmount: 199.99,
//     },
//     {
//       recentTName: "Yaw Asiedu",
//       recentTDate: "2025-05-19",
//       recentTAmount: 125.0,
//     },
//     {
//       recentTName: "Dorcas Nyame",
//       recentTDate: "2025-05-20",
//       recentTAmount: 60.25,
//     },
//     {
//       recentTName: "Prince Amankwah",
//       recentTDate: "2025-05-21",
//       recentTAmount: 134.0,
//     },
//     {
//       recentTName: "Naana Adjei",
//       recentTDate: "2025-05-22",
//       recentTAmount: 230.75,
//     },
//     {
//       recentTName: "Felix Baah",
//       recentTDate: "2025-05-23",
//       recentTAmount: 78.9,
//     },
//     {
//       recentTName: "Gloria Akoto",
//       recentTDate: "2025-05-24",
//       recentTAmount: 180.4,
//     },
//     {
//       recentTName: "Collins Kusi",
//       recentTDate: "2025-05-25",
//       recentTAmount: 90.0,
//     },
//     {
//       recentTName: "Martha Koranteng",
//       recentTDate: "2025-05-26",
//       recentTAmount: 66.6,
//     },
//     {
//       recentTName: "Sammy Forson",
//       recentTDate: "2025-05-27",
//       recentTAmount: 144.44,
//     },
//     {
//       recentTName: "Regina Obeng",
//       recentTDate: "2025-05-28",
//       recentTAmount: 110.5,
//     },
//     {
//       recentTName: "Elvis Aidoo",
//       recentTDate: "2025-05-29",
//       recentTAmount: 123.45,
//     },
//     {
//       recentTName: "Mabel Osei",
//       recentTDate: "2025-05-30",
//       recentTAmount: 72.15,
//     },
//     {
//       recentTName: "Nana Abena",
//       recentTDate: "2025-05-31",
//       recentTAmount: 132.0,
//     },
//     {
//       recentTName: "Caleb Agyapong",
//       recentTDate: "2025-06-01",
//       recentTAmount: 119.95,
//     },
//     {
//       recentTName: "Rebecca Gyamfi",
//       recentTDate: "2025-06-02",
//       recentTAmount: 97.3,
//     },
//     {
//       recentTName: "Ernest Frimpong",
//       recentTDate: "2025-06-03",
//       recentTAmount: 140.0,
//     },
//     {
//       recentTName: "Theresa Armah",
//       recentTDate: "2025-06-04",
//       recentTAmount: 165.8,
//     },
//     {
//       recentTName: "Francis Addai",
//       recentTDate: "2025-06-05",
//       recentTAmount: 118.2,
//     },
//     {
//       recentTName: "Juliet Appiah",
//       recentTDate: "2025-06-06",
//       recentTAmount: 100.0,
//     },
//     {
//       recentTName: "Maxwell Mensah",
//       recentTDate: "2025-06-07",
//       recentTAmount: 215.5,
//     },
//     {
//       recentTName: "Rhoda Twumasi",
//       recentTDate: "2025-06-08",
//       recentTAmount: 89.75,
//     },
//     {
//       recentTName: "Isaac Koomson",
//       recentTDate: "2025-06-09",
//       recentTAmount: 143.0,
//     },
//     {
//       recentTName: "Comfort Yeboah",
//       recentTDate: "2025-06-10",
//       recentTAmount: 155.55,
//     },
//     {
//       recentTName: "Albert Sackey",
//       recentTDate: "2025-06-11",
//       recentTAmount: 84.2,
//     },
//     {
//       recentTName: "Phyllis Anane",
//       recentTDate: "2025-06-12",
//       recentTAmount: 93.0,
//     },
//     {
//       recentTName: "Stephen Amofa",
//       recentTDate: "2025-06-13",
//       recentTAmount: 170.75,
//     },
//     {
//       recentTName: "Nana Yaw",
//       recentTDate: "2025-06-14",
//       recentTAmount: 129.99,
//     },
//     {
//       recentTName: "Salomey Darkwah",
//       recentTDate: "2025-06-15",
//       recentTAmount: 200.2,
//     },
//     {
//       recentTName: "Desmond Boateng",
//       recentTDate: "2025-06-16",
//       recentTAmount: 140.1,
//     },
//     {
//       recentTName: "Akua Asieduwaa",
//       recentTDate: "2025-06-17",
//       recentTAmount: 158.3,
//     },
//     {
//       recentTName: "Bright Owusu",
//       recentTDate: "2025-06-18",
//       recentTAmount: 107.0,
//     },
//     {
//       recentTName: "Anita Gyasi",
//       recentTDate: "2025-06-19",
//       recentTAmount: 189.0,
//     },
//   ];

//   return (
//     <section className="flex-1">
//       {/* Top dashboard banner section */}
//       <DashboardBanner chartCardData={cardData} />

//       {/* Main content split: Left (70%) and Right (30%) */}
//       <section className="flex w-full gap-6 mt-6">
//         {/* Left section - 70% */}
//         <div className="w-[55%] flex flex-col gap-6">
//           {/* Weekly Transactions chart */}
//           <div className="bg-white rounded-lg shadow p-4">
//             <WeeklyChart
//               headerTitle="Weekly Transactions"
//               chartData={[
//                 {
//                   name: "Transactions",
//                   data: [120, 200, 150, 80, 70, 110, 130],
//                 },
//               ]}
//             />
//           </div>

//           {/* Recent Transactions table or any lower component */}
          
//         </div>

//         {/* Right section - 30% */}
//         <div className="w-fit flex flex-col gap-4">
//           {/* Optional: smaller table or list */}
//           <div className="bg-white rounded-lg shadow p-4 mt-4">
//             {/* Test Recent Transaction */}
//             <RecentTransaction data={transactionData} />
//           </div>
//         </div>
//       </section>

//       <div className="bg-white rounded-lg shadow p-4">
//             <h2 className="font-semibold text-lg mb-2">Pending Transactions</h2>
//             <CustomTable columns={tableColumns} data={tableData} />
//           </div>
//     </section>
//   );
// };
