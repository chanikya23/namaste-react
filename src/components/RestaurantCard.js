import {CDN_URL} from "../../utils/constants";
const RestaurantCard = (props)=>{
    
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,       
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;
    return(
        <div className='res-card m-4 p-4 w-[200px] bg-gray-100 hover:bg-gray-200 shadow-lg border border-black'>
            <div>
            <img className=" w-[200px] h-[140px] res-logo rounded-2xl"  src={CDN_URL + cloudinaryImageId}/>
            </div>
            <div className="details">
            <h4 className='font-bold py-5 text-xl'>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <p>{avgRating}Star</p>
            <p>{costForTwo}</p> 
            <p>Delivery in {sla.deliveryTime} min</p>
            </div> 
        </div>
    )   
}

export default RestaurantCard;