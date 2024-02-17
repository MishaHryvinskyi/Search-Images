import { Component } from "react";
import { ImageGalleryStyle } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component {
    state = { 
        query: null,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.query !== this.props.query) {
            this.setState({ query: this.props.query });
          }
    }
   render() {
    const { query } = this.state;
    return (
        <ImageGalleryStyle>
            {query && query.map(hit => (
              <ImageGalleryItem hit={hit} key={hit.id} />
            ))}
        </ImageGalleryStyle>
    )
   }
}