import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import Items from "./Items";

const Body = () => {
    // It is for all list of cards. 
    const [listOfRestaurants, setListOfRestaurant] = useState([])
    // It is for the Filtered data.
    const [filteredRestaurants, setFilteredRestaurants] = useState([])   
    // Input value
    const [searchText, setSearchText] = useState("")

   useEffect(()=>{
    fetchData()
   },[])
   const fetchData = async ()=>{
    const data =await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json =await data.json();
    console.log(json); 
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   };

   return listOfRestaurants.length===0?(
     <Shimmer/>
   ):
    (
        <div className='body'>
        <Items/>
            <div className="filter">
                <div className='search'>
                    <input type='text' className="search-box" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                    />
                    <button 
                        onClick={() =>{
                            //filter the restaurant and update the UI
                            console.log(searchText);
                            const filteredRestaurants = listOfRestaurants.filter(
                                (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filteredRestaurants);
                        }}
                    >Search</button>
                </div>
                <button onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating>=4.0
                    );
                    setListOfRestaurant(filteredList)
                }}
                >
                Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
            {filteredRestaurants.map((restaurant) =>(
                <Link  style={{ textDecoration: 'none' }}
                    key={restaurant.info.id} 
                    to={"/restaurants/"+ restaurant.info.id}>
                    <RestaurantCard resData={restaurant}/>
                </Link>
            ))}

            </div>
        </div>
    )
}

export default Body;