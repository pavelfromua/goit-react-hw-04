import {useEffect, useState} from 'react'
import './App.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import {fetchImages} from "./images-api.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loadMore, setLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [modalUrls, setModalUrls] = useState("");
    const [alt, setAlt] = useState("");
    const [modalIsOpened, setModalIsOpened] = useState(false);

    const openModal = (alt, modalUrls) => {
        setModalIsOpened(true);
        setAlt(alt);
        setModalUrls(modalUrls);
    };
    const closeModal = () => {
        setModalIsOpened(false);
        setAlt("");
        setModalUrls("");
    };

    const handleChangeQuery = (newQuery) => {
        if (query === newQuery) {
            return;
        }

        setPage(1);
        setImages([]);
        setQuery(newQuery);
    };

    const handleChangePage = () => {
        setPage(prev => prev + 1);
    };

    useEffect(() => {
        const getImagesData = async () => {
            try {
                if (query === '') {
                    return;
                }

                setError(false);
                setLoadMore(false);

                //if (images.length > 0) {
                setLoading(true);
                //}

                const portion = await fetchImages(query, page);

                setImages(prev => [...prev, ...portion]);

                setLoadMore(true);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        getImagesData();
    }, [query, page]);

    return (<>
            <SearchBar onSearchChanged={handleChangeQuery}/>
            {error && <ErrorMessage/>}
            {images.length > 0 && <ImageGallery images={images} openModal={openModal}/>}
            {loadMore && <LoadMoreBtn handleChangePage={handleChangePage}/>}
            {loading && <Loader/>}
            <ImageModal
                openModal={modalIsOpened}
                closeModal={closeModal}
                modalUrls={modalUrls}
                alt={alt}
            />
        </>
    )
}

export default App
