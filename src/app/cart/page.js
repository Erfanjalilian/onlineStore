
import CartItem from "../../components/cartItem/cartItem";
function cart(){
    return(
       <div>
         
         <div className="mx-auto w-11/12">
         <div className="mt-8">Shopping cart</div>
         <br />
            <CartItem />

            <h3 className="mt-8">Total of all prices : <spa>100$</spa></h3>
            <br />
            <button className="text-white bg-blue-700 rounded-lg w-full pt-4 pb-4">Continue shopping</button>
         </div>
        
       </div>
     
    )
}
export default cart;