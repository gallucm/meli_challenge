const search_icon = require('../../assets/img/search_mini.png');

export const SearchComponent = () => {
  return (
    <div className="main-search">
        <input type="text" name="input-search" id="search" className="input-search" placeholder="Nunca dejes de buscar"/>
        <button type="submit">
          <img src={search_icon} alt="search button"/>
        </button>
    </div>
  )
}
