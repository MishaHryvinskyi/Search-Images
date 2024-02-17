import { ImageGalleryItemStyle } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ hit, onClick }) => {
  const handleClick = () => {
    onClick(hit);
  };

  return (
    <ImageGalleryItemStyle key={hit.id} onClick={handleClick}>
      <img src={hit.webformatURL} alt={hit.id} />
    </ImageGalleryItemStyle>
  );
};