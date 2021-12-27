import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Box, Text } from "grommet";

const LinkComponent = (props) => (
  <Button
    onClick={() => {
      props.history.push(
        "/gameofthrones-overview/" + props.type + "/" + props.id
      );
    }}
    margin="xxsmall"
    hoverIndicator="#476172"
    active
  >
    <Box pad="xxsmall" direction="row" align="center" gap="small">
      <Text color="light-1">#{props.id}</Text>
    </Box>
  </Button>
);

export default withRouter(LinkComponent);
