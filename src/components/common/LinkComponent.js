import React from "react";
import { LinkBox } from "../../styles/StyleComponent";

const LinkComponent = (props) => (
  <LinkBox>
    <a href={"/gameofthrones-overview/" + props.type + "/" + props.id}>
      {" "}
      #{props.id}{" "}
    </a>
  </LinkBox>
);

export default LinkComponent;
