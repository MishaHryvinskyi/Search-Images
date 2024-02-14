import { ImageGalleryItemStyle, ImageGalleryItemImage } from "components/ImageGallery/ImageGallery.styled";

export const ImageGalleryItem = ({ hit }) => {
    return (
        <ImageGalleryItemStyle>
            <ImageGalleryItemImage 
                src={hit.largeImageURL} 
                alt={hit.tags} 
                width="800"
            />
        </ImageGalleryItemStyle>
    )
}

