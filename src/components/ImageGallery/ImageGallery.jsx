import React, { Component } from "react";
import {ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyle } from "components/ImageGalleryItem/ImageGalleryItem.styled"; 

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35643945-433c06e40cd86730ec72beccd';

export default class ImageGallery extends Component {
    state = {
        query: null,
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.query;
        const nextName = this.props.query
        if(prevName !== nextName) {
            fetch(`${BASE_URL}?q=${nextName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.json())
    .then(data => this.setState({ query: data.hits }))
        }
    }

    render() {
        const { query } = this.state;
        return (
            <ImageGalleryStyle>
                {query && query.map(hit => (
                <ImageGalleryItem key={hit.id} hit={hit}/>))}
            </ImageGalleryStyle>
        )
    }
}