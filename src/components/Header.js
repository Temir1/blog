import React, { Fragment } from "react";
import { Flex, Box, Text } from "rebass";

import Logo from "./Logo";

const bg = "#e9e9e9";
const color = "#545454";

export default class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <Flex>
          <Box pl={[1, 3, 6]} pt={2} width={1 / 8} bg={bg}>
            <Logo />
          </Box>
          <Box p={3} width={1} color={color} bg={bg}>
            <Text>@My BLog</Text>
          </Box>
        </Flex>
      </Fragment>
    );
  }
}
