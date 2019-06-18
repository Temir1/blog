import React, { Fragment } from "react";
import Header from "../components/Header";
import BlogInfo from "../components/BlogInfo";

class Blog extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BlogInfo />
      </Fragment>
    );
  }
}

export default Blog;
