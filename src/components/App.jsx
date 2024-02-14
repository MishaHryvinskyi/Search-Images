import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

export default class App extends Component {
  state = {
    searc: '',
  }

  formSubmitHandler = searc => {
    this.setState({ searc })
  }

  render() {
    const { searc } = this.state;
    return (
      <div>
        <Searchbar onSubmitSearch={this.formSubmitHandler}/>
        <ImageGallery query={searc} />
      </div>
    )
  }
};
