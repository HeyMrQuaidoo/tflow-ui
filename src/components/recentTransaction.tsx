import React, { useState } from "react";
import { RecentTransactionProps } from "@/interfaces";


export const RecentTransaction: React.FC<RecentTransactionProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="bg-white p-4 rounded-xl w-full">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <table className="min-w-full table-auto text-left border border-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">GH₵</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((txn:any, index:any) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-2 px-4">{txn.recentTName}</td>
              <td className="py-2 px-4">{txn.recentTDate}</td>
              <td className="py-2 px-4 text-right font-medium">
                ₵{txn.recentTAmount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
