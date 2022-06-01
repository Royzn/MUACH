import react from "react";
import TheProducts from "./dataDress";


function ProductDress (props) {
    return (
        <div className="productContDress">
            <div className="smallSq">
                <p>Indoor</p>
            </div>
            <img src={props.imageURL} alt="Product"/>
            <h2>{props.id}</h2>
            <div className="Desc">
                <div className="star">
                    *****
                </div>
                <p>
                    nama <br></br>
                    Jakarta
                </p>
            </div>
        </div>
    )
}

export default ProductDress;