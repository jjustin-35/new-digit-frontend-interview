const SearchBar = ({
  onRefresh,
  onDelete,
  onSearch,
}: {
  onRefresh: () => void;
  onDelete: () => void;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex justify-end gap-2 p-5">
      <input
        type="text"
        placeholder="Search"
        onChange={onSearch}
        className=" border border-gray-300 rounded-[6px] p-2 w-[150px] text-base"
      />
      <button className="py-1 bg-red-500 text-white rounded-[6px] min-w-[150px] cursor-pointer" onClick={onDelete}>
        Delete
      </button>
      <button className="py-1 bg-blue-500 text-white rounded-[6px] min-w-[150px] cursor-pointer" onClick={onRefresh}>
        Refresh
      </button>
    </div>
  );
};

export default SearchBar;
