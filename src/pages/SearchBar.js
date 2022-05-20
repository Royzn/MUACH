import react from "react";
// import searchLogo from "../../Assets/Search.png"
// import style from './Venue/VenueModule.scss';

const SearchBar = () =>{

return (
  <div>
<form action="/" method="get">
        <label htmlFor="header-search" />
            
        <div className="TheSearch">
        <input type="text" className="searchBar" placeholder="Cari Lokasi atau Venue"/>
        <button className="searchButton"></button>
        {/* <img src={searchLogo} alt="Search" /> */}
        </ div>
    </form>
    </div>
);

    
};

export default SearchBar;