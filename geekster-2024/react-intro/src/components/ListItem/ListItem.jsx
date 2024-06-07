import PropTypes from "prop-types";
import { useState } from "react";

const ListItem = ({ name, isPacked = false }) => {
  const [isPkd, setIsPacked] = useState(isPacked);

  const toggleIsPacked = () => {
    setIsPacked(!isPkd);
  };

  return (
    <li onClick={toggleIsPacked}>
      {name} {isPkd === true && <span>✅</span>}
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
  isPacked: PropTypes.bool,
};

export default ListItem;
