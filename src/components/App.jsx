import React, { Component } from "react";
import { Loader } from "./Loader/Loader";
import Searchbar from "./Searchbar/Searchbar";
import Modal from "./Modal/Modal";
import imageFinder from "./services/api-image-finder";
import ImageGallery from "./ImageGallery/ImageGallery";

export default class App extends Component {
  state = {
    search: '',
    loading: false,
    query: null,
    isOpen: false
  }

  onSubmitSearch = data => {
    this.setState({ search: data });
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  closeModal = () => {
    this.setState({ isOpen: false })
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.search;
    const nextName = this.state.search;

    if(prevName !== nextName) {
      this.setState({ loading: true })

      imageFinder(nextName)
      .then(response => response.json())
      .then(data => this.setState({ query: data.hits }))
      .finally(() => this.setState({ loading: false }))
    }
  }

  render() {
    const { loading, query, isOpen } = this.state;
    return (
      <div>
        <Searchbar onSubmitSearch={this.onSubmitSearch}/>
        {loading && <Loader />}
        <ImageGallery query={query}/>
        {isOpen && <Modal closeModal={this.closeModal}/>}
      </div>
    )
  }
};
