import React from "react";
import { LinkBox } from "../../styles/CardComponent";

const LinkComponent = (props) => (
  <LinkBox>
    <a href={"/" + props.type + "/" + props.id}> #{props.id} </a>
  </LinkBox>
);

export default LinkComponent;
