"use client";

import SearchBar from "../SearchBar";
import Table from "../Table";
import { useState } from "react";
import { ClientData } from "../../constants/types";

const Dashboard = () => {
    const [data, setData] = useState<ClientData[]>([]);
    const [keyword, setKeyword] = useState<string>("");
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    const getData = async () => {
        const resp = await fetch("/api/mock");
        const data: ClientData[] = await resp.json();
        setData(data);
    };

    const onDelete = () => {
        setData((prev) => prev.filter((item) => !checkedItems[item.id]));
    };

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };
    
    const filteredData = data.filter((item) => item.client.toLowerCase().includes(keyword.toLowerCase()));

    return (
    <div className="w-full bg-white">
      <SearchBar onRefresh={getData} onDelete={onDelete} onSearch={onSearch} />
      <Table data={filteredData} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
    </div>
  );
};

export default Dashboard;
