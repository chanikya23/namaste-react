import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import Items from "./Items";
import useOnlineStatus from "../../utils/useOnlineStatus";

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
   
    const onlineStatus = useOnlineStatus();
    
    if(onlineStatus === false) return (
        <h2>
            Looks like you are in offline. Check your Internet Connection.
        </h2>
    );
   return listOfRestaurants.length===0?(
     <Shimmer/>
   ):
    (
        <div className='body'>
        <Items/>
            <div className="filter flex mt-5 ml-20 justify-center">
                <div className='search'>
                    <input type='text' className="search-box border border-solid border-black" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                    />
                    <button className='ml-2 px-3 py-1 bg-yellow-200 rounded-md'
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
                <button className='ml-3 px-3 py-1 bg-blue-500 rounded-md' onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating>=4.0
                    );
                    setListOfRestaurant(filteredList)
                }}
                >
                Top Rated Restaurants
                </button>
            </div>
            <div className='res-container flex flex-wrap ml-10'>
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