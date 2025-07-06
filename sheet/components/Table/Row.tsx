"use client";

import React from "react";
import { AccountData } from "@/app/api/mock";
import Checkbox from "../Checkbox";
import columns from "./data";

interface RowProps {
  data: AccountData;
  isChecked: boolean;
  onChecked: () => void;
}

const transformData = (data: AccountData) => {
  return {
    id: data.id,
    name: data.name,
    totalBalance: `$${data.totalBalance}`,
    issueDate: new Date(data.issueDate).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    balance: `$${data.balance}`,
  };
};

const Row = ({ data, isChecked, onChecked }: RowProps) => {
  const transformedData = transformData(data);
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 flex items-center pl-2">
      <td className="flex items-center justify-center p-2">
        <Checkbox isChecked={isChecked} onChange={onChecked} />
      </td>
      {columns.map((column) => (
        <td
          key={column.key}
          className="text-center"
          style={{ width: column.width }}
        >
          <span>{transformedData[column.key]}</span>
        </td>
      ))}
    </tr>
  );
};

export default Row;
