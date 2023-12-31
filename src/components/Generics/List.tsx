import React, { ReactNode } from "react";
type ListItems<T extends ReactNode> = {
  items: T[];
  onClick: (value: T) => void;
};
const List = <T extends ReactNode>({ items, onClick }: ListItems<T>) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;
