import React from "react";

/*React Component as Child elemnt of Parent component */
type SectionHeadingElement = {
  children: React.ReactNode;
};

const SectionHeading = (heading: SectionHeadingElement) => {
  return <div>{heading.children}</div>;
};

export default SectionHeading;
