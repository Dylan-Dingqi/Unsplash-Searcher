import React from "react";
import "./ImageList.css";
import ImageCard from  "./ImageCard";

const ImageList = (props) => {
    let images =  <h2>No result :(</h2>;
    if (props.images.length > 0) {
        images = props.images.map((image) => {
            return ( <ImageCard key={image.id} image={image} />);
        })
    }
    return (
        <div className="image-list">{images}</div>
    )
}

export default ImageList;