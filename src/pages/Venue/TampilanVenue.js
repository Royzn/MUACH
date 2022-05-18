import react, {useState} from "react";
import Products from "./Products";
import SearchBar from "./SearchBar";
import TombolKategori from "./TombolKategori";
import TombolOffers from "./TombolOffers";
const VenueLayout = () =>{
    return (
    <div>
        <TombolKategori />
        <SearchBar />
        <TombolOffers />
        <Products />
    </div>
    )
};

export default VenueLayout;
