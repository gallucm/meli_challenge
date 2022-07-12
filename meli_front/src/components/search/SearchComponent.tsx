import { useState } from "react";

import { useNavigate } from 'react-router-dom';

const search_icon = require('../../assets/img/search_mini.png');

export const SearchComponent = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/items?search=${decodeURI(search)}`);
  }
  
  return (
    <div className="main-search">
        <input type="text" name="input-search" id="search" className="input-search" value={search} onChange={handleInputChange} placeholder="Nunca dejes de buscar" />
        <button type="submit" onClick={handleSubmit}>
          <img src={search_icon} alt="search button"/>
        </button>
    </div>
  )
}
