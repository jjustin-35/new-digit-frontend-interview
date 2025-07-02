"use client";

import { ClientData } from "../../constants/types";
import TableHeader from "./tableHeader";
import Row from "./Row";

interface TableProps {
  data: ClientData[];
  checkedItems: Record<string, boolean>;
  setCheckedItems: (checkedItems: Record<string, boolean>) => void;
}

const Table = ({ data, checkedItems, setCheckedItems }: TableProps) => {
  const onAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const newCheckedItems = data.reduce<Record<string, boolean>>((acc, row) => {
      return {
        ...acc,
        [row.id]: isChecked,
      }
    }, {});
    setCheckedItems(newCheckedItems);
  };

  const onChecked = (id: string) => {
    const newCheckedItems = {
      ...checkedItems,
      [id]: !checkedItems[id],
    }
    setCheckedItems(newCheckedItems);
  };

  const isAllChecked = Object.values(checkedItems).every(Boolean);

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <TableHeader isAllChecked={isAllChecked} onAllChecked={onAllChecked} />
        <tbody>
          {data.map((row) => (
            <Row
              key={row.id}
              data={row}
              isChecked={!!checkedItems[row.id]}
              onChecked={() => onChecked(row.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
