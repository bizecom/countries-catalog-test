import React from "react";

const CountryCard = ({ country, onClick }) => (
  <div
    className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
    onClick={() => onClick(country)}
  >
    <img src={country.flags.png} alt={country.name.official} className="w-16 h-10" />
    <h3 className="text-lg font-semibold">{country.name.official}</h3>
    <p>Code: {country.cca2} / {country.cca3}</p>
    <p>Calling Code: {country.idd.root}{country.idd.suffixes?.[0] || ""}</p>
  </div>
);

export default CountryCard;
