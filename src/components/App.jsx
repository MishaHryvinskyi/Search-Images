import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import { Loader } from "./Loader/Loader";

export default class App extends Component {
  state = {
    searc: '',
    showModal: false,
    selectedImage: null,
    loading: false,
  }

  openModal = (selectedImage) => {
    this.setState({ showModal: true, selectedImage })
  }
  
  closeModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  }

  handleKeyDown = ({ code }) => {
    const { showModal } = this.state;

    if(code === 'Escape' && showModal) {
      this.closeModal();
    }
  }

  formSubmitHandler = searc => {
    this.setState({ searc })
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searc;
    const nextName = this.props.searc;
    if(prevName !== nextName) {
      this.setState({ loading: true })
    }

  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { searc, showModal, selectedImage, loading  } = this.state;
    return (
      <div>
        <Searchbar onSubmitSearch={this.formSubmitHandler}/>
        {loading && <Loader />}
        <ImageGallery openModal={this.openModal} query={searc} />
        {showModal && <Modal closeModal={this.closeModal}>
            <img src={selectedImage} alt="modal" />
        </Modal>}
      </div>
    )
  }
};
