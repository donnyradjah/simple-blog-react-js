import React, { Component } from "react";
import axios from "axios";
import parse from "html-react-parser";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { judul: "", berita: "" };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/blog/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          judul: response.data.result.judul,
          berita: response.data.result.berita
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="my-3 container">
        <h1 className="card-title">{this.state.judul}</h1>
        <div className="mt-5 blog-posts">{parse(this.state.berita)}</div>
      </div>
    );
  }
}

export default Detail;
