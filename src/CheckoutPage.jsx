import "./CheckOutpage.css";
import CheckOutForm from "./CheckOutForm"
import CheckOutOverview from "./CheckOutOverview"
const CheckOutpage=({arr})=>{
    return <div className="whole">
        <CheckOutForm className="a"/>
        <CheckOutOverview className="a" arr={arr}/>
    </div>
}