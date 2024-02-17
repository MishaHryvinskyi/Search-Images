import React, { Component } from "react";
import { Loader } from "./Loader/Loader";
import Searchbar from "./Searchbar/Searchbar";
import imageFinder from "./services/api-image-finder";
import ImageGallery from "./ImageGallery/ImageGallery";

export default class App extends Component {
  state = {
    search: '',
    loading: false,
    query: null,
  }

  onSubmitSearch = data => {
    this.setState({ search: data });
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
    const { loading, query, error } = this.state;
    return (
      <div>
        <Searchbar onSubmitSearch={this.onSubmitSearch}/>
        {loading && <Loader />}
        {error && <h2>Ніц не вийшло {query}</h2>}
        <ImageGallery query={query}/>
      </div>
    )
  }
};
