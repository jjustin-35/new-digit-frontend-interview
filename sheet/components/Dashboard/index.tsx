"use client";

import { mockFetch, AccountData } from "@/app/api/mock";
import SearchBar from "../SearchBar";
import Table from "../Table";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState<AccountData[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  // const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getData({ page: 1, pageSize: 10 });
  }, []);

  const getData = async ({
    page,
    pageSize,
  }: {
    page: number;
    pageSize: number;
  }) => {
    const resp = await mockFetch({ page, pageSize });
    setData(resp);
  };

  const onDelete = () => {
    const newData: AccountData[] = data.filter(
      (item) => !checkedItems[item.id]
    );
    setData(newData);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="py-6">
      <div className="w-[1132px] h-[80vh] overflow-y-auto bg-white mx-auto shadow-lg rounded-[6px]">
        <SearchBar
          onRefresh={() => getData({ page: 1, pageSize: 10 })}
          onDelete={onDelete}
          onSearch={onSearch}
        />
        <Table
          data={filteredData}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      </div>
    </section>
  );
};

export default Dashboard;
