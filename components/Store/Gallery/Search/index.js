export default function Search({ searchTerm, setSearchTerm }) {
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="w-full flex justify-end items-center h-fit my-3 p-2">
      <input
        onChange={handleChange}
        value={searchTerm}
        placeholder="Search"
        className="bg-transparent outline-none w-2/4 border h-full p-3 rounded-md"
      />
    </div>
  );
}
