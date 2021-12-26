import React from "react";

import { Anchor, Box, Header, Menu, ResponsiveContext } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

export const HeaderComponent = () => (
  <Header pad="small" justify="around" background="#476172">
    <Anchor color="light-1" href="/" label="Game of thrones" weight="bolder" />
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
                  href: "/",
                },
                {
                  label: <Box pad="small">Characters</Box>,
                  href: "/characters",
                },
                {
                  label: <Box pad="small">Books</Box>,
                  href: "/books",
                },
              ]}
            />
          </Box>
        ) : (
          <Box justify="end" direction="row" gap="medium">
            <Anchor href="/" color="light-1" label="Houses" />
            <Anchor href="/characters" color="light-1" label="Characters" />
            <Anchor href="/books" color="light-1" label="Books" />
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  </Header>
);

export default HeaderComponent;
