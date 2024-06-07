import { useState } from "react";
import data from "../../data/data";
import RestaurantListItem from "../RestaurantListItem/RestaurantListItem";

const Restaurant = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderList = () => {
    const list = data.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const mappedArray = list.map((restaurant) => (
      <RestaurantListItem key={restaurant._id.$oid} name={restaurant.name} />
    ));

    return mappedArray;
  };

  return (
    <div>
      <input
        placeholder="search restaurant"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <section>
        <ul>{renderList()}</ul>
      </section>
    </div>
  );
};

export default Restaurant;
