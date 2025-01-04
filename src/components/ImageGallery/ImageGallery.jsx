import ImageCard from "../ImageCard/ImageCard.jsx";
import s from "./ImageGallery.module.css";

export default function ImageGallery ({images, openModal}) {
    return (
        <ul className={s.imageGallery}>
            {images.map(image => (<li className={s.imageItem} key={image.id}>
                <ImageCard data={image} openModal={openModal} />
            </li> ))}
        </ul>

    );
}