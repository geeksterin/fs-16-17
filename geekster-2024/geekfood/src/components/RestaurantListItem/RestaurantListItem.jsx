import PropTypes from "prop-types";

const RestaurantListItem = ({ name }) => {
  return (
    <div className="shadow-md my-2 border border-purple-200 text-lg font-semibold">
      {name}
    </div>
  );
};

RestaurantListItem.propTypes = {
  name: PropTypes.string,
};

export default RestaurantListItem;
