import React, { Component } from "react";
import axios from "axios";
import Blog from "./blog.component";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = { blogs: [] };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/blog")
      .then(response => {
        this.setState({ blogs: response.data.result });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  blogList() {
    return this.state.blogs.map(function(object, i) {
      return <Blog obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div className="my-3 container">
        <h1 className="card-title">Blog News</h1>
        <div className="mt-5 blog-posts">{this.blogList()}</div>
      </div>
    );
  }
}

export default Index;
