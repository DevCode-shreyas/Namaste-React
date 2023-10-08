import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const [filterdRestaurant, setFilterdRestaurant] = useState(resList);

  const [searchText, setSearchText] = useState("");

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) => {
                res.data.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilterdRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            console.log("clicked");
            // filter out the top rated restaurant

            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            // listOfRestaurantss = listOfRestaurantss.filter(
            //   (res) => res.data.avgRating > 4
            // );
          }}
        >
          Top rated restaurant
        </button>
      </div>

      <div className="res-container">
        {filterdRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;

// import RestaurantCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   let [listOfRestaurants, setRestaurant] = useState([]);
//   const ApiData = async () => {
//     let fetchData = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//     );
//     let resJsonData = await fetchData.json();
//     let arrayOfCards = resJsonData.data.cards;
//     let restaurantList = "restaurant_grid_listing";

//     if (listOfRestaurants.length === 0) {
//       return <Shimmer />;
//     }

//     for (const cardObj of arrayOfCards) {
//       if (cardObj.card.card && cardObj.card.card.id === restaurantList) {
//         const resData =
//           cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//         setRestaurant(resData);
//       }
//     }
//   };

//   useEffect(() => {
//     ApiData();
//   }, []);

//   return (
//     <div className="body">
//       {/* <div className="search">Search</div> */}
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             console.log("clicked");
//             // filter out the top rated restaurant

//             const filteredList = listOfRestaurants.filter(
//               (res) => res.data.avgRating > 4
//             );
//             setRestaurant(filteredList);
//             // listOfRestaurantss = listOfRestaurantss.filter(
//             //   (res) => res.data.avgRating > 4
//             // );
//           }}
//         >
//           Top rated restaurant
//         </button>
//       </div>

//       <div className="res-container">
//         {listOfRestaurants.map((restaurant) => {
//           return (
//             <RestaurantCard key={restaurant.data.id} resData={restaurant} />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Body;

// import RestrauntCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// // import { filterData } from "../utils/helper";

// const Body = () => {
//   const [allRestaurant, setAllRestaurant] = useState("");
//   const [searchText, setSearchText] = useState("");
//   const [filterdRestaurant, setFilterdRestaurant] = useState([]);

//   useEffect(() => {
//     getRestaurants();
//   }, []);

//   const getRestaurants = async () => {
//     try {
//       const data = await fetch(
//         "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

//         // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       );

//       const json = await data.json();

//       // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
//       async function checkJsonData(jsonData) {
//         for (let i = 0; i < jsonData?.data?.cards.length; i++) {
//           // initialize checkData for Swiggy Restaurant data
//           let checkData =
//             json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
//              ?.restaurants;

//           // if checkData is not undefined then return it
//           if (checkData !== undefined) {
//             return checkData;
//           }
//         }
//       }
//       // call the checkJsonData() function which return Swiggy Restaurant data
//       const resData = await checkJsonData(json);

//       // update the state variable restaurants with Swiggy API data
//       setAllRestaurant(resData);
//       setFilterdRestaurant(resData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return allRestaurant?.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <>
//       <div className="p-5 bg-pink-50 my-1 ">
//         <input
//           type="text"
//           className="Search-input"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />

//         <button
//           className="p-3 m-2  bg-purple-600 text-white rounded-lg hover:bg-green-800"
//           onClick={() => {
//             const data = filterData(searchText, allRestaurant);
//             setFilterdRestaurant(data);
//           }}
//         >
//           Search
//         </button>
//       </div>

//       <div className="resturant-list flex flex-wrap">
//         {filterdRestaurant?.length === 0 ? (
//           <h1>No data match your filter</h1>
//         ) : (
//           filterdRestaurant?.map((restaurant) => {
//             return (
//               <Link
//                 key={restaurant?.info.id}
//                 to={"/restaurant/" + restaurant?.info.id}
//               >
//                 <RestrauntCard {...restaurant?.info} />
//               </Link>
//             );
//           })
//         )}
//       </div>
//     </>
//   );
// };

// export default Body;
