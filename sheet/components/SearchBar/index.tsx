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
      <input type="text" placeholder="Search" onChange={onSearch} />
      <button className="px-2 py-1 bg-red-500 text-white" onClick={onDelete}>
        Delete
      </button>
      <button className="px-2 py-1 bg-blue-500 text-white" onClick={onRefresh}>
        Refresh
      </button>
    </div>
  );
};

export default SearchBar;
