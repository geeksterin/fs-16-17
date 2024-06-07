import ListItem from "../ListItem/ListItem";

const list = [
  {
    name: "Goggles",
    isPacked: true,
  },
  {
    name: "A pair of boots",
    isPacked: false,
  },
  {
    name: "Clothes",
    isPacked: true,
  },
  {
    name: "Jacket",
    isPacked: false,
  },
];

const PackingList = (props) => {
  const renderList = () => {
    const mappedList = list.map((item) => (
      <ListItem name={item.name} isPacked={item.isPacked} key={item.name} />
    ));

    return mappedList;
  };

  return (
    <div>
      <h2>Ladakh packing list...</h2>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default PackingList;
