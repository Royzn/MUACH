import react, {useState} from "react";
import Products from "./ProductsDress";
import SearchBar from "../SearchBar";
import TombolKategori from "../TombolKategori";
import TombolOffers from "../TombolOffers";
const DressLayout = () =>{
    return (
    <div>
        <TombolKategori />
        <SearchBar />
        <TombolOffers />
        <Products />
    </div>
    )
};

export default DressLayout;