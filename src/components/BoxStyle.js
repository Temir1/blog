import React from "react";
import styled from "styled-components";
import { Box } from "rebass";

const BoxStyle = styled(Box)`
  opacity: 0.9;
  border-top-left-radius: ${props => props.borderTopLeftRadius};
  border-top-right-radius: ${props => props.borderTopRightRadius};
`;

export default BoxStyle;
