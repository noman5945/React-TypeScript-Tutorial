/*import type prop */

import { PersonProp } from "./Types/Person.Types";

const Person = (props: PersonProp) => {
  return (
    <div className="">
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
