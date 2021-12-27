import React from "react";

import { Anchor, Box, Header, Menu, ResponsiveContext } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

export const HeaderComponent = () => (
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
                  href: "/gameofthrones-overview/",
                },
                {
                  label: <Box pad="small">Characters</Box>,
                  href: "/gameofthrones-overview/characters",
                },
                {
                  label: <Box pad="small">Books</Box>,
                  href: "/gameofthrones-overview/books",
                },
              ]}
            />
          </Box>
        ) : (
          <Box justify="end" direction="row" gap="medium">
            <Anchor
              href="/gameofthrones-overview/"
              color="light-1"
              label="Houses"
            />
            <Anchor
              href="/gameofthrones-overview/characters"
              color="light-1"
              label="Characters"
            />
            <Anchor
              href="/gameofthrones-overview/books"
              color="light-1"
              label="Books"
            />
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  </Header>
);

export default HeaderComponent;
