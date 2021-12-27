import React from "react";

import { Anchor, Box, Header, Menu, ResponsiveContext } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import { withRouter } from "react-router-dom";

export const HeaderComponent = (props) => (
  <Header pad="small" justify="around" background="#476172">
    <Anchor
      color="light-1"
      href="/gameofthrones-overview/"
      label="Game of thrones"
      weight="bolder"
    />
    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Box justify="end">
            <Menu
              a11yTitle="Navigation Menu"
              dropProps={{ align: { top: "bottom", right: "right" } }}
              icon={<MenuIcon color="light-1" />}
              items={[
                {
                  label: <Box pad="small">Houses</Box>,
                  onClick: () => {
                    props.history.push(`/gameofthrones-overview/`);
                  },
                },
                {
                  label: <Box pad="small">Characters</Box>,
                  onClick: () => {
                    props.history.push(`/gameofthrones-overview/characters`);
                  },
                },
                {
                  label: <Box pad="small">Books</Box>,
                  onClick: () => {
                    props.history.push(`/gameofthrones-overview/books`);
                  },
                },
              ]}
            />
          </Box>
        ) : (
          <Box justify="end" direction="row" gap="medium">
            <Anchor
              color="light-1"
              label="Houses"
              onClick={() => {
                props.history.push(`/gameofthrones-overview/`);
              }}
            />
            <Anchor
              color="light-1"
              label="Characters"
              onClick={() => {
                props.history.push(`/gameofthrones-overview/characters`);
              }}
            />
            <Anchor
              color="light-1"
              label="Books"
              onClick={() => {
                props.history.push(`/gameofthrones-overview/books`);
              }}
            />
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  </Header>
);

export default withRouter(HeaderComponent);
