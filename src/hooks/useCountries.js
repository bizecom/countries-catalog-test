import { useState, useEffect } from "react";
import { fetchCountries } from "../services/countryService";
import Fuse from "fuse.js";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
    };

    loadCountries();
  }, []);

  // Fuzzy Search eg: Japaan => Japan
  const fuse = new Fuse(countries, {
    keys: ["name.official"],
    threshold: 0.3,
  });

  const handleSearch = (query) => {
    setSearch(query);
    setFilteredCountries(query ? fuse.search(query).map(({ item }) => item) : countries);
  };

  const handleSort = () => {
    const sorted = [...filteredCountries].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.official.localeCompare(b.name.official)
        : b.name.official.localeCompare(a.name.official)
    );
    setFilteredCountries(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return {
    filteredCountries,
    loading,
    search,
    handleSearch,
    handleSort,
  };
};
