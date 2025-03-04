
import "./product.css";
const Product=({name,url,price,quantity,oldp})=>(
    
 <div className="box">
 <img src={url} alt="" />
 <h3>{name}</h3>
<div>
  <p className="oldprice">${oldp}</p>
 <p>${price}</p>
</div>
 <button ><b>{quantity>0?"Add to cart":"Out of stock"}</b></button>
</div>
);
export default Product;