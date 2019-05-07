import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeJudul = this.onChangeJudul.bind(this);
    this.onChangeBerita = this.onChangeBerita.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      judul: "",
      berita: ""
    };
  }
  onChangeJudul(e) {
    this.setState({ judul: e.target.value });
  }
  onChangeBerita(e) {
    this.setState({ berita: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const objBLog = {
      judul: this.state.judul,
      berita: this.state.berita
    };
    axios
      .post("http://127.0.0.1:8000/api/blog", objBLog)
      .then(res => console.log(res));

    this.setState({
      judul: "",
      berita: ""
    });
  }

  render() {
    return (
      <div className="my-3 container">
        <h1 className="card-title">Form Create</h1>

        <form onSubmit={this.onSubmit} method="post">
          <div className="form-group">
            <label htmlFor="judul">Judul : </label>
            <input
              value={this.state.judul}
              onChange={this.onChangeJudul}
              type="text"
              className="form-control"
              name="judul"
              id="judul"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ckeditor">Berita : </label>
            <CKEditor
              editor={ClassicEditor}
              data={this.state.berita}
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({ berita: data });
              }}
              onBlur={editor => {
                console.log("Blur.", editor);
              }}
              onFocus={editor => {
                console.log("Focus.", editor);
              }}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-success mx-1">
              Simpan
            </button>
            <Link to={"/"} className="btn btn-danger mx-1">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
