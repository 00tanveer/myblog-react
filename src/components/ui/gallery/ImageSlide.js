import React from 'react';

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'stretch',
        backgroundPosition: 'center',
        width: '700px',
        height: '400px',
        //zIndex: '3'
    };
    console.log(url);
    
    return (
    <div className="image-slide" style={styles}></div>
    );
}

export default ImageSlide;