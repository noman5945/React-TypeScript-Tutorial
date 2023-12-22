type ContainerProps = {
  style: React.CSSProperties;
  Title: string;
};

const Container = (props: ContainerProps) => {
  return <div style={props.style}>{props.Title}</div>;
};

export default Container;
