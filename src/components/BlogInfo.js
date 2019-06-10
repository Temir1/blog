import React from "react";
import styled from "styled-components";

class BlogInfo extends React.Component {
  render() {
    return <p className={this.props.className}>Name</p>;
  }
}

const StyledBlogInfo = styled(BlogInfo)`
  color: palevioletred;
  font-weight: bold;
`;

export default StyledBlogInfo;
