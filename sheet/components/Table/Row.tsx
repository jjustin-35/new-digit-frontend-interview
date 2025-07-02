"use client";

import React from "react";
import { ClientData } from "../../constants/types";
import Checkbox from "../Checkbox";
import columns from "./data";

interface RowProps {
  data: ClientData;
  isChecked: boolean;
  onChecked: () => void;
}

const Row = ({ data, isChecked, onChecked }: RowProps) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="w-[42px] flex items-center justify-center py-4">
        <Checkbox isChecked={isChecked} onChange={onChecked} />
      </td>
      {columns.map((column) => (
        <td 
          key={column.key} 
          className={`w-[${column.width}] py-4 px-2`}
        >
          {data[column.key]}
        </td>
      ))}
    </tr>
  );
};

export default Row;
