import React, { Fragment } from "react";
import { Flex, Box, Text } from "rebass";

import BlogContent from "./BlogContent";
import FlexStyle from "./FlexStyle";
import BoxStyle from "./BoxStyle";

const URL_IMAGE_WRAPPER =
  "url(https://cdn.pixabay.com/photo/2016/11/21/18/18/abstract-1846979_960_720.jpg)";

class BlogInfo extends React.Component {
  render() {
    return (
      <Fragment>
        <FlexStyle justifyContent="center" urlImage={URL_IMAGE_WRAPPER}>
          <BoxStyle width={1}>
            <BlogContent />
          </BoxStyle>
        </FlexStyle>
      </Fragment>
    );
  }
}

export default BlogInfo;
