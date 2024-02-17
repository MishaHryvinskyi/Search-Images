import React, { Component } from "react";
import { ImageGalleryStyle } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";

export default class ImageGallery extends Component {
  state = {
    query: null,
    selectedImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ query: this.props.query, selectedImage: null });
    }
  }

  openModal = (selectedImage) => {
    this.setState({ selectedImage });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { query, selectedImage } = this.state;

    return (
      <>
        <ImageGalleryStyle>
          {query &&
            query.map((hit) => (
              <ImageGalleryItem
                hit={hit}
                key={hit.id}
                onClick={this.openModal}
              />
            ))}
        </ImageGalleryStyle>
        {selectedImage && (
          <Modal closeModal={this.closeModal}>
            <img src={selectedImage.largeImageURL} alt={selectedImage.id} />
          </Modal>
        )}
      </>
    );
  }
}