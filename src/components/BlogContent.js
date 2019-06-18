import React, { Fragment } from "react";
import { Text } from "rebass";

import FlexStyle from "./FlexStyle";
import BoxStyle from "./BoxStyle";
import BicepsIcon from "./BicepsIcon";

class BlogContent extends React.Component {
  render() {
    return (
      <Fragment>
        <FlexStyle mt={3} mx={125} flexDirection="column">
          <BoxStyle
            p={3}
            bg="white"
            borderTopLeftRadius="25px"
            borderTopRightRadius="25px"
          >
            <Text
              fontSize={[3, 4, 5]}
              fontWeight="bold"
              textAlign="center"
              letterSpacing={3}
            >
              Temirlan&nbsp;Ismagulov
              <BicepsIcon />
            </Text>
          </BoxStyle>
          <BoxStyle color="white" bg="red">
            Box
          </BoxStyle>
        </FlexStyle>
      </Fragment>
    );
  }
}

export default BlogContent;
