import "./CartPage.css";
import CartProduct from "./CartProduct";
const CartPage=({arr})=>{
    let totMrp=0,totDis=0,finPri=0;
    arr.forEach(a=>{
        totMrp+=a.oldp;
         finPri=a.price;
         totDis+=totMrp-totDis;
    });
 return  <div className="Cart">
     <div className="prods">
        {arr.map(a=><CartProduct {...a}/>)}
    </div>
       

    <div className="pricing">
    <div className="adj">
      <p>Total MRP:</p>
    <p>${totMrp}</p>
    </div >
    <div className="adj">
    <p>Total discount:</p>
    <p>${totDis}</p>
    </div>
    <div className="adj">
      <p>Offer price:</p>
    <p>${finPri}</p>
    </div>

    <button>
      Buy now
</button>
</div>

   </div>
}