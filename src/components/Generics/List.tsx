type ListItems<T> = {
  items: T[];
  onClick: (value: T) => void;
};
const List = <T extends {}>({ items, onClick }: ListItems<T>) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {JSON.stringify(item)}
          </div>
        );
      })}
    </div>
  );
};

export default List;
