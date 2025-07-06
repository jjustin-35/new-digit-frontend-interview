"use client";

import Checkbox from "../Checkbox";
import columns from "./data";

const TableHeader = ({
  isAllChecked,
  onAllChecked,
}: {
  isAllChecked: boolean;
  onAllChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <thead>
      <tr className="pl-2 bg-[#F9FAFC] flex items-center">
        <th className="flex items-center justify-center p-2">
          <Checkbox isChecked={isAllChecked} onChange={onAllChecked} />
        </th>
        {columns.map((column) => (
          <th key={column.key} className="py-2 last:*:border-r-0" style={{ width: column.width }}>
            <div className="w-full text-center text-xs leading-6 border-r-2 border-gray-200">
              {column.label}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
