import React from "react";

const LinkComponent = (props) => (
  <button>
    <a href={"/" + props.type + "/" + props.id}> #{props.id} </a>
  </button>
);

export default LinkComponent;
