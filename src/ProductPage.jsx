import "./ProductPage.css";
const ProductPage=({url,name,oldp,price,})=>{
    const offerpercentage=(oldp-price)*100/oldp;
    return <div className="prodDes">
      <header>
        <p><-</p>
        <h2>{name}</h2>
      </header>
      <div className="body">
       <img src={url} alt="" />
       <div className="desc">
        <h4>{name}</h4>
        <p>MRP:${oldp}</p>
        <p><b>offer price:${price}</b></p>
        <p><b className="gr">{offerpercentage}% off</b></p>
        <div className="buttons">
            <button>Add to Cart</button>
            <button>Buy now</button>
        </div>
       </div>
      </div>
    </div>

}
export default ProductPage;