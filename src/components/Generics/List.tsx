import React from "react";
type ListItems<T> = {
  item: T[];
  onClick: (value: T) => void;
};
const List = <T extends {}>({ item, onClick }: ListItems<T>) => {
  return <div></div>;
};

export default List;
