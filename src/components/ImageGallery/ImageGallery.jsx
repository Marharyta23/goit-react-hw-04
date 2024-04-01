import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ photos, onModalOpen }) {
  return (
    <ul className={css.gallery}>
      {photos.map(({ alt_description, urls, id }) => {
        return (
          <li
            className={css.item}
            key={id}
            onClick={() => onModalOpen(urls.regular, alt_description)}
          >
            <ImageCard alt={alt_description} url={urls.small} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
