/*
    Declare type and properties of that type
    msgCount is optional property. If nothing is defined then show 0 by default 
*/
type GreetProps = {
  name: string;
  msgCount?: number;
};

const Greet = (props: GreetProps) => {
  const { msgCount = 0 } = props;
  return (
    <div>
      <h2>
        Hello {props.name},You have {msgCount} unread msges
      </h2>
    </div>
  );
};

export default Greet;
