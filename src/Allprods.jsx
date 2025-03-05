import Product from "./Product";
import "./Allprods.css";
function Allprods() {
    return (
        <div className="prods">
            {list.map(li => (
                <Product {...li} key={li.id} />
            ))}
        </div>
    );
}
export default Allprods;