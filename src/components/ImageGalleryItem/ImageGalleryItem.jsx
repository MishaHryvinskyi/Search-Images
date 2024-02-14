
export const ImageGalleryItem = ({ hit }) => {
    return (
        <li>
            <img 
                src={hit.previewURL} 
                alt={hit.tags} 
                width="800"
            />
        </li>
    )
}

