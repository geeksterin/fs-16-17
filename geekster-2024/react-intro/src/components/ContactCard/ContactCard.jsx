import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import useLocalStorage from "beautiful-react-hooks/useLocalStorage";

const ContactCard = (props) => {
  const [person, setPerson] = useLocalStorage("person", {});

  console.log(person);

  useEffect(() => {
    if (!person.name) {
      setPerson({
        name: props?.name,
        city: props?.city,
        profession: props?.profession,
      });
    }
  }, [person, props, setPerson]);

  return (
    <div className={`${styles.card} ${styles.common}`}>
      <p>Name: {person.name}</p>
      <p>City: {person.city}</p>
      <p>Profession: {person.profession}</p>
    </div>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
  profession: PropTypes.string,
};

export default ContactCard;
