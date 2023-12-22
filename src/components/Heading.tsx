/*children element type(check App.tsx for implementation) */
type HeadingText = {
  children: string;
};
const Heading = (props: HeadingText) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};

export default Heading;
