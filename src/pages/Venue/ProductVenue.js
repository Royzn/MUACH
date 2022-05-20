import react from "react";
import TheProductsVenue from "./dataVenue";


function ProductVenue (props) {
    return (
        <div className="productContVenue">
     
            <img src={props.imageURL} alt="Venue"/>
            <h2>{props.id}</h2>
      
        </div>
    )
}

export default ProductVenue;