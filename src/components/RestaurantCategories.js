import ItemList from "./ItemList";

const RestaurantCategories =({data, showItems, setShowIndex})=>{
    // const [showItems, setShowItems] = useState(false);
    const handleClick=()=>{
       setShowIndex();
    }
    return(
        <div>
            {/* Header */}
            <div className=' w-8/12 bg-gray-100 shadow-lg p-4 my-4'>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
            </div>
            {/* Accodion Body */}
        </div>
    );
};

export default RestaurantCategories;