import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState } from "react";


const Body = () => {
    let [listOfRestaurants, setListOfRestaurant] = useState(resList)

    return(
        <div className='body'>
            <div className="filter">
                <button onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating>=4.5);
                    setListOfRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
            {listOfRestaurants.map((restaurant) =>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
            {/* <RestaurantCard/> */}
            </div>
        </div>
    )
}

export default Body;