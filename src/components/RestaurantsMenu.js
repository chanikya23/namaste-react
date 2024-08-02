import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";   
import { CDN_URL } from '../../utils/constants';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../../utils/constants';
import '../../RestaurantsMenu.css';

const RestaurantsMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu= async()=>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json(); 
        setResInfo(json.data);
        console.log(json);
    }
    if (resInfo === null) return   <Shimmer/>;
    const { name, cuisines,costForTwoMessage, avgRating,totalRatingsString,cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    console.log(itemCards);  
    return(
        <>
        <div className="menu"> 
            <div className='card'>
                <div>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwoMessage}</h4>
                <p>{avgRating}/5  -  {totalRatingsString}</p>
                <button>Order Now</button>
                </div>
                <div>
                <img src={CDN_URL + cloudinaryImageId} style={{width:'200px', height:'200px', borderRadius:'20px'}}/>
                
                </div>
            
            </div>
            <div className='related-menu'>
            <h3>Related Menu</h3>
            <ul>
                {itemCards.map(item =>
                    <li key={item.card.info.id}>{item.card.info.name} - {"Rs."}
                    {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
                )}
            </ul>   
            
            </div>
                
            {/* <h1>jsdkjasdkj</h1> */}
        </div>
        </>
    )
}
export default RestaurantsMenu;