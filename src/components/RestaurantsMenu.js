import Shimmer from "./Shimmer";   
import { CDN_URL } from '../../utils/constants';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import { useParams } from "react-router-dom";
import StarRating from "./starRating";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const RestaurantsMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] =useState(null);

    if (resInfo === null) return  <Shimmer/>;
    
    const cardInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
    // console.log( resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards );  // List of 23 cards. 
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card?.card["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);
    const categoriesArray = Array.isArray(categories) ? categories : [];

    const { name = '', cuisines = [], costForTwoMessage = '', avgRating = '', totalRatingsString = '', cloudinaryImageId = '', } = cardInfo;

    return(
        <>
        <div className="menu ml-60"> 
            <div className='card flex justify-around p-5 max-w-2xl border rounded-lg'>
                <div>  
                    <h3 className="text-lg font-bold">{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{costForTwoMessage}</h4>
                    <div className="flex items-center text-lg">
                        <StarRating rating={parseFloat(avgRating)} /> {/* Render stars */}
                        {/* <p className="ml-2">{avgRating}/5</p> */}
                    </div>
                    <p>{totalRatingsString}</p>
                    <button type="button" className="mt-3 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Order Now</button>
                </div>
                <div>
                    <img className="w-32 rounded-lg" src={CDN_URL + cloudinaryImageId}/>    
                </div>
            </div>
            {/* <RestaurantCategories /> */}
            {
                categoriesArray.length > 0 ? (
                    categoriesArray.map((category, index) => (
                        <RestaurantCategories key={index} data={category?.card?.card}
                        showItems ={index == showIndex ? true:false}
                        setShowIndex={()=>setShowIndex(index)}
                        />
                    ))
                ) : (
                    <p>No categories available</p> // Fallback UI
                )
            }
        </div>
        </>
    )
}
export default RestaurantsMenu;
