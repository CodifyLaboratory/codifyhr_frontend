import React from "react";
import Slider from "react-slick";
export default class SimpleSlider extends React.Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 5
        };

        return (
            <div>
                <Slider {...settings}>
                    {this.props.children}
                </Slider>
            </div>
        );
    }
}