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
      <tr className="pl-2 py-4">
        <th className="p-4 flex items-center justify-center">
          <Checkbox isChecked={isAllChecked} onChange={onAllChecked} />
        </th>
        {columns.map((column) => (
          <th key={column.key} className={`w-[${column.width}] text-center`}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
