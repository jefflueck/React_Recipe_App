import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Search() {
  const [query, setQuery] = useState('pizza');
  useEffect(() => {
    async function getResults() {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=be9922f7b1d24b2eb56d4806d55757f8`
      );
      console.log(response);
    }
    getResults();
  }, [query]);
  return (
    <div className="Search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
