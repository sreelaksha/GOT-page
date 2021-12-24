import React from "react"
import { Box, Header, Footer, Text, Anchor, Nav  } from "grommet"

const Page = ({ children }) => (
  <Box pad="medium" background="url(/bg-image.jpeg)">
    <Header pad="small" justify="around" >
    <Nav direction="row" >
        <Anchor href="/" color="dark-1" label="Game Of Thrones" />
   </Nav>
    <Nav direction="row">
        <Anchor href="/" color="dark-1" label="Houses" />
        <Anchor href="/characters" color="dark-1" label="Characters" />
        <Anchor href="/books" color="dark-1" label="Books" />
   </Nav>
  </Header>
    <Box>{children}</Box>
    <Footer justify="center" pad="small">
      <Text textAlign="center" size="small">
        Footer Text
      </Text>
    </Footer>
  </Box>
)

Page.propTypes = Box.propTypes

export default Page