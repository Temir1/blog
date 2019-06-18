import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";

const FlexStyle = styled(Flex)`
  background-image: ${props => props.urlImage};
`;

export default FlexStyle;
