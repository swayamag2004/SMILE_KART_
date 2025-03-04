import "./CheckOutOverview.css";
import { Fragment } from "react";
const CheckOutOverview=({arr})=>{
    let total=0;
    arr.forEach(a=>total+=a.price);
    return <div className="whole">
         <div className="prods">
              {arr.map(a=>(
                <Fragment>
                <div className="item">
              <img src={a.url}/>
              <p><b>{a.name}</b></p>
              <p>${a.price}</p>
              </div>
                    </Fragment>
              ))}
         </div>
         <div className="billing">
           <div>
            <p className="p"><b>Subtotal</b></p>
            <p>${total}</p>
           </div>
           <div>
           <p className="p"><b>Delivery Charges</b></p>
            <p>FREE</p>
           </div>
           <hr />
           <div>
           <p className="p"><b>Total Payable</b></p>
            <p>${total}</p>
           </div>
         </div>
         <div>
            <button>Confirm Order</button>
         </div>
    </div>
}