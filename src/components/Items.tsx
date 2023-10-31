import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string, index: number) => void;
}

function Items({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  items.map((item) => <li className="list-group-item">{item}</li>);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item, index);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Items;
