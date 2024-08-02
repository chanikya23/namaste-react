import {CDN_URL} from "../../utils/constants";
const RestaurantCard = (props)=>{
    
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;
    return(
        <div className='res-card'>
            <div>
            <img className="res-logo"  src={CDN_URL + cloudinaryImageId}/>
            </div>
            <div className="details">
            <h4>{name}</h4>
            {/* <h4>{cuisines.join(", ")}</h4> */}
            <p>{avgRating}Star - {sla.deliveryTime} min</p>
            <p>{costForTwo}</p> 
            </div> 
        </div>
    )   
}

export default RestaurantCard;