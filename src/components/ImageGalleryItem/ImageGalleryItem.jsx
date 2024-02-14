import { ImageGalleryItemStyle, ImageGalleryItemImage } from "components/ImageGallery/ImageGallery.styled";

export const ImageGalleryItem = ({ hit, openModal  }) => {

    const handleClick = () => {
        openModal(hit.largeImageURL);
    }

    return (
        <ImageGalleryItemStyle onClick={handleClick}>
            <ImageGalleryItemImage 
                src={hit.webformatURL} 
                alt={hit.tags} 
                width="800"
            />
        </ImageGalleryItemStyle>
    )
}