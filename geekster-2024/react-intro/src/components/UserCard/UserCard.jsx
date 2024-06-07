import PropTypes from "prop-types";
import { memo } from "react";

const UserCard = ({ user, onClick }) => {
  console.log("Rerendering----", user.name);
  return (
    <div
      className="border-2 border-teal-900 shadow-md m-2"
      onClick={() => onClick(user.id)}
    >
      <img src={user.avatar} alt={user.name} />
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
  onClick: PropTypes.func,
};

export default memo(UserCard);
// export default UserCard;
