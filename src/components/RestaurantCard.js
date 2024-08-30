import {CDN_URL} from "../../utils/constants";
import StarRating from "./starRating";
const RestaurantCard = (props)=>{
    
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,       
        avgRating,
        costForTwo,
        sla
    } = resData?.info;
    return(
        <div className='m-4 p-2 w-[200px] hover:bg-gray-200 shadow-sm rounded-3xl'>
            <div>
            <img className="w-[250px] h-[160px] rounded-xl"  src={CDN_URL + cloudinaryImageId}/>
            </div>
            <div style={{marginTop:'-10px'}}>
            <h4 className='font-bold py-5 text-xl'>{name}</h4>
            {/* <h4>{cuisines.join(", ")}</h4> */}
            {/* <p>{avgRating}Star</p> */}
            <div style={{marginTop:'-15px'}} className="flex items-center text-lg">
                        <StarRating rating={parseFloat(avgRating)} /> 
                        {/* <p className="ml-2">{avgRating}/5</p> */}
            </div>
            {/* <p >{costForTwo}</p>  */}
            {/* <p className="ml-2">{avgRating}/5</p> */}
            <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            <p className="text-gray-700">{sla.deliveryTime} min</p>
            </div>
            </div> 
        </div>
    )   
}

// Higher order function
// input - Restaurantcard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return(props)=>{
        return(
            <div>
                <label>is Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;