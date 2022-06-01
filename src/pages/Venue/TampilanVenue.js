import react, {useState} from "react";
import ProductsDress from "./ProductsVenue";
import SearchBar from "../SearchBar";
import TombolKategori from "../TombolKategori";
import TombolOffers from "../TombolOffers";
import style from './VenueModule.scss';

const VenueLayout = () =>{
    return (
    <div>
        <TombolKategori />
        <SearchBar />
        <TombolOffers />
        <ProductsDress />
    </div>
    )
};

export default VenueLayout;
