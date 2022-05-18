import react from "react";
import TheProducts from "./data";


function Product (props) {
    return (
        <div className="productCont">
     
            <img src={props.imageURL} alt="Product"/>
            <h2>{props.id}</h2>
      
        </div>
    )
}

export default Product;