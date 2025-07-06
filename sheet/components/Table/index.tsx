"use client";

import { AccountData } from "@/app/api/mock";
import TableHeader from "./tableHeader";
import Row from "./Row";

interface TableProps {
  data: AccountData[];
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

  const onChecked = (id: number) => {
    const newCheckedItems = {
      ...checkedItems,
      [id]: !checkedItems[id],
    }
    setCheckedItems(newCheckedItems);
  };

  const checkedItemsValues = Object.values(checkedItems);
  const isAllChecked = checkedItemsValues?.length > 0 && checkedItemsValues.every(Boolean);

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
