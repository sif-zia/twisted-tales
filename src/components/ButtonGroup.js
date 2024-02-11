import React from "react";
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group" style={{justifyContent:"center",marginTop:"20px" }} >
            <div className="slider-arrows arrow-style-1 text-center d-lg-flex d-none flex-row justify-content-center align-items-center gap-4">
                <div
                    className="category1-next swiper-next-arrow"
                    tabindex="0"
                    role="button"
                    aria-label="Next slide"
                >
                    <i className='bi bi-arrow-left' onClick={() => previous()}></i>
                </div>
                <div
                    className="category1-prev swiper-prev-arrow"
                    tabindex="0"
                    role="button"
                    aria-label="Previous slide"
                >
                    <i className="bi bi-arrow-right" onClick={() => next()}></i>
                </div>
            </div>
        </div>
    );
};

export default ButtonGroup