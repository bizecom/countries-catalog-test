import React, { useState } from "react";
import CountryCard from "./components/CountryCard";
import CountryModal from "./components/CountryModal";
import Pagination from "./components/Pagination";
import { useCountries } from "./hooks/useCountries";

const App = () => {
  const { filteredCountries, loading, search, handleSearch, handleSort } = useCountries();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  const handleClick = (country) => setSelectedCountry(country);
  const handleClose = () => setSelectedCountry(null);

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const displayedCountries = filteredCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <div className="w-screen h-screen flex justify-center items-center">Loading...</div>;

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <h1 className="text-center mb-3 text-3xl">Countries Catalog</h1>
      <div className="space-x-5">
        <input
          type="text"
          placeholder="Search by country name"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="border p-2 rounded mb-4"
        />
        <button onClick={handleSort} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
          Sort by Name
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} onClick={handleClick} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      <CountryModal country={selectedCountry} onClose={handleClose} />
    </div>
  );
};

export default App;
