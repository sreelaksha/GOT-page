import React from "react";
import { Box, Main } from "grommet";
import Header from "./HeaderComponent";

const Page = ({ children }) => (
  <Main pad="medium" background={"url(/gameofthrones-overview/bg-image.jpeg)"}>
    <Header />
    <Box>{children}</Box>
  </Main>
);

Page.propTypes = Box.propTypes;

export default Page;
