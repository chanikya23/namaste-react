import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = ()=>{
    
    const cartItems= useSelector((store) =>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart =()=>{
        dispatch(clearCart())
    }

    return <div className="text-center m-3 p-2">
        <div className="flex justify-evenly">
            <h1 className='btn bg-orange-300 p-2 rounded-lg'>Cart Items</h1>
            <button className='bg-black rounded-lg text-white p-2'
                onClick={handleClearCart}
            >Clear Cart</button>
           
        </div>
        {cartItems.length ==0 && (
                <h1 className="font-bold mt-10">Cart is empty. Add Items to your cart..!</h1>
            )}
        <div className='w-6/12 ml-52'>
            <ItemList items={cartItems}/>
        </div>
    </div>;
    
}

export default Cart;
