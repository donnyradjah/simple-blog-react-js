import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className="blog-post">
        <hr />
        <h3 className="title">{this.props.obj.judul}</h3>
        <div className="post">
          {this.props.obj.berita.replace(/<[^>]+>/g, "")}
        </div>
        <Link
          to={"/detail/" + this.props.obj.id}
          className="mt-4 btn btn-success"
        >
          Read More
        </Link>
        <hr />
      </div>
    );
  }
}

export default Blog;
