import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalDiv } from "./Modal.styled";

const modalRoot = document.getElementById('modal');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.closeModal(); 
    }
  }

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal(); 
    }
  }

  render() {
    const { children } = this.props;
   
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <ModalDiv>
          {children}
        </ModalDiv>
      </Overlay>,
      modalRoot
    );
  }
}