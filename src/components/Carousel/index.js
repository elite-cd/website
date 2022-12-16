import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';
import T from 'prop-types';
import * as React from 'react';
import * as style from './Carousel.module.scss';
const Carousel = ({ items }) => {
  const intl = useIntl();
  const sliderSize = items.length;
  let containerRef = React.useRef(null);
  let slideRef = React.useRef(null);
  let intervalFunc = null;
  let activeSlide = 0;

  React.useEffect(() => {
    if (containerRef.current) {
      updateActiveSlide();
    }
    return () => clearInterval(intervalFunc);
  }, []);

  const updateActiveSlide = () => {
    if (intervalFunc) return;
    intervalFunc = setInterval(() => {
      let slideWidth = slideRef.current.clientWidth;
      if (activeSlide > sliderSize - 1) {
        slideWidth = sliderSize * slideWidth;
        containerRef.current.style.display = 'none';
        containerRef.current.scrollLeft -= slideWidth;
        containerRef.current.style.display = 'block';
        activeSlide = 0;
        return;
      }
      if (activeSlide == 0) {
        containerRef.current.style.display = 'flex';
        containerRef.current.style.flex = '1 1 100%';
      }
      containerRef.current.scrollLeft += slideWidth;
      activeSlide += 1;
    }, 2000);
  };

  updateActiveSlide();

  return (
    <section className={style['slider__wrapper']}>
      <ul ref={containerRef} className={style['slides__container']}>
        {items.map((item, i) => (
          <li ref={slideRef} key={`value-${i}`} className={style['slide']}>
            <div className={style.item}>
              <GatsbyImage
                fluid={item.image.childImageSharp.fluid}
                alt={`carousel-${i}`}
                className={style.background}
                image={getImage(item.image)}
              />
              <div className={style.overlay}>
                <p className={style.title}>
                  {intl.formatMessage({ id: item.title })}
                  <br />
                  <span className={style.subtitle}>
                    {intl.formatMessage({ id: item.subtitle })}
                  </span>
                </p>
                <p className={style.desc}>
                  {intl.formatMessage({ id: item.desc })}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

Carousel.propTypes = {
  items: T.array,
};

export default Carousel;
