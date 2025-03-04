import "./CartProduct.css";
import icon from "../public/delete.png";

const CartProduct=({name,url,oldp,price,})=>(
    <div className="prod">
   <div className="img">
     <img src={url}/>
   </div>
   <div className="desc">
    <p><b>{name}</b></p>
    <p>MRP:{oldp}</p>
    <p>Offer Price:{price}</p>
   </div>
   <div className="quan">
    <div className="butt">
    <button>-</button>
    <p>5</p>
    <button>+</button>
    </div>
    <img src={icon}/>
   </div>
</div>

);

export default CartProduct;
