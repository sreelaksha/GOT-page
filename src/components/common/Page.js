import React from "react";
import { Main, Box } from "grommet";
import Header from "./HeaderComponent";

const Page = ({ children }) => (
  <Main pad="medium" background={"url(/bg-image.jpeg)"}>
    <Header />
    <Box>{children}</Box>
  </Main>
);

Page.propTypes = Box.propTypes;

export default Page;
