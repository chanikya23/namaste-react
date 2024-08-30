import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";

const ItemList =({items})=>{

    const dispatch = useDispatch();

    const handleAddItem = (item)=>{
        // Dispatch actions
        dispatch(addItem(item));
        alert('Item added to the cart');
    }

    return <div>
        {items.map((item)=>(
            <div key={item.card.info.id}
            className=" border-b-2 border-gray-200 flex justify-around "
            >
                <div className="py-3">
                    <div className='w-9/12'>
                    <h3>{item.card.info.name}</h3>
                    <h4> - ₹{item.card.info.price ? item.card.info.price /100 : item.card.info.defaultPrice /100}</h4>
                    <p className="text-sm">{item.card.info.description}</p>
                    </div>
                    
                </div>
                <div className='3/12 p-4'>
                    <div className="absolute">
                        <button 
                        className='p-2 bg-black text-white shadow-lg m-auto mt-28 ml-10 rounded'
                        onClick={()=>handleAddItem(item)}
                        >Add +</button>
                    
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} className="w-80 h-36"/>
                </div>
            </div>

        ))}
    </div>
}

export default ItemList;