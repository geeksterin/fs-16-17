import ContactCard from "../../components/ContactCard/ContactCard";
import styles from "./styles.module.css";

const Contacts = () => {
  return (
    <div className={styles.blue}>
      <ContactCard
        name="John doe"
        city="Germany"
        profession="Software Engineer"
      />
    </div>
  );
};

export default Contacts;

// {
//   name:"John doe"
//   city:"Germany"
//   profession:"Software Engineer"
// }
