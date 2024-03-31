import css from "./ImageCard.module.css";
import ImageModal from "../ImageModal/ImageModal";
import { useState } from "react";

function ImageCard({ alt, url, urlBig }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div>
      <img
        src={url}
        alt={alt}
        className={css.image}
        onClick={() => setIsOpen(true)}
      />
      {modalIsOpen && (
        <ImageModal onClose={() => setIsOpen(false)} modalIsOpen={modalIsOpen}>
          <img src={urlBig} alt={alt} className={css.full} />
        </ImageModal>
      )}
    </div>
  );
}

export default ImageCard;
