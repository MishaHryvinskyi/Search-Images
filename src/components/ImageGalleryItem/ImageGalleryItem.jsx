import { ImageGalleryItemStyle } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ hit }) => {
    return(
        <ImageGalleryItemStyle key={hit.id}>
            <img src={hit.webformatURL} alt={hit.id} />
        </ImageGalleryItemStyle>
    )
}