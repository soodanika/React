import { useEffect, useState } from "react";

const ImageSlider = ({ url, page, limit }) => {

    let [images, setImages] = useState([]);
    let [currentImage, setCurrentImage] = useState(0)
    let [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const data = await fetch(`${url}?page=${page}&limit=${limit}`);
            const json = await data.json();
            setImages(json);
        }
        catch {
            setError("An error occured");
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleBack = () => {
        setCurrentImage(prevImage => (prevImage <= 0 ? images.length - 1 : prevImage - 1));
    }

    const handleFront = () => {
        setCurrentImage(prevImage => (prevImage >= images.length - 1 ? 0 : prevImage + 1));
    }




    return (
        <div className="main-container">
            <button className="btn-back" onClick={handleBack}>◀</button>
            <div className="image-container">
                {images.map((i, index) => {
                    return (
                        <img key={i.id} className={`image ${currentImage !== index ? "hide" : ""}`} src={i.download_url} />
                    )
                })}
            </div>
            <button className="btn-forward" onClick={handleFront}>▶</button>
            <div className="circle-container">
                {images.map((i, index) => {
                    return (

                        <span className={`circle ${currentImage === index ? "selected" : null}`} onClick={() => setCurrentImage(index)}></span>

                    )
                })}
            </div>

        </div>
    )
}

export default ImageSlider;