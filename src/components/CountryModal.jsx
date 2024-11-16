import React from "react";

const CountryModal = ({ country, onClose }) => {
  if (!country) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full flex flex-col gap-5">
        <button onClick={onClose} className="text-gray-500 self-end">X</button>
        <div>
          <h2 className="text-xl font-bold">{country.name.official}</h2>
          <p>Native Name: {Object.values(country.name.nativeName || {})[0]?.official}</p>
          <p>Alternative Names: {country.altSpellings.join(", ")}</p>
          <p>2 Char Code: {country.cca2}, 3 Char Code: {country.cca3}</p>
          <p>Calling Code: {country.idd.root}{country.idd.suffixes?.[0] || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryModal;
