const SearchBar = ({ setSearchTerm }) => {
    return (
        <>
      <input
        type="text"
        placeholder="Buscar productos..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full my-4"
        />
        </>
    );
  };
  
  export default SearchBar;
  