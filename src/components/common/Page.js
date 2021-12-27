import React from "react";
import { Box } from "grommet";
import Header from "./HeaderComponent";

const Page = ({ children }) => (
  <Box pad="medium" background={"url(/gameofthrones-overview/bg-image.jpeg)"}>
    <Header />
    <Box>{children}</Box>
  </Box>
);

Page.propTypes = Box.propTypes;

export default Page;
