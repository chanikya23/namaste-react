
import { useEffect, useState } from "react";
import { CDN_URL } from "../../utils/constants";

const Items = () => {
    const [listOfItems, setListOfItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await response.json();
        // Extract the items from the response
        const items = json.data.cards[0].card.card.imageGridCards.info;
        setListOfItems(items); // Set items to state
    };

    return (
        <>
        <h1>What's on your mind?</h1>
        <div className='items'>
            <div className='items-img'>
            {listOfItems.map((item, index) => (
                <div key={index}>
                    <img src={CDN_URL + item.imageId} alt={`Item ${index}`} />
                </div>
            ))}
            </div>
        </div>
        </>
    );
}

export default Items;
