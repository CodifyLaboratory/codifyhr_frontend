import React, { Component} from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="container">
                <h2> Single Item</h2>
                <Slider {...settings}>
                    {[1, 2, 3, 4, 5].map((item, index) => {
                        return <div key={index}>{item} </div>
                    })}
                </Slider>
            </div>
        );
    }
}