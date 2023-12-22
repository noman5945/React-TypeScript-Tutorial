import { Name } from "./Types/Person.Types";

/*Array list type */
type PersonLists = {
  names: Name[];
};
const PersonList = (props: PersonLists) => {
  return (
    <div>
      {props.names.map((name, index) => {
        return (
          <p key={index}>
            {name.first} {name.last}
          </p>
        );
      })}
    </div>
  );
};

export default PersonList;
