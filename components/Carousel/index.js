import T from 'prop-types';
import Slider from 'react-slick';

const Carousel = ({ children }) => {
  var settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>{children}</Slider>;
};

Carousel.propTypes = {
  children: T.any,
};

export default Carousel;
