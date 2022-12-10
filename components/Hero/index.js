import T from 'prop-types';
import { useIntl } from 'react-intl';
import Carousel from '../Carousel';
import CarouselItem from '../Carousel/carousel-item';
import style from './style.module.scss';

const Hero = () => {
  const intl = useIntl();
  return (
    <div className={style.container}>
      <Carousel>
        <CarouselItem
          imageUri={'images/hero02.png'}
          subtitle={intl.formatMessage({ id: 'carousel.home.one.subtitle' })}
          desc={intl.formatMessage({ id: 'carousel.home.one.desc' })}
          actionText={intl.formatMessage({
            id: 'carousel.home.one.button-text',
          })}
          title={intl.formatMessage({ id: 'carousel.home.one.title' })}
        />
        <CarouselItem
          imageUri={'images/hero03.png'}
          subtitle={intl.formatMessage({ id: 'carousel.home.two.subtitle' })}
          desc={intl.formatMessage({ id: 'carousel.home.two.desc' })}
          actionText={intl.formatMessage({
            id: 'carousel.home.one.button-text',
          })}
          title={intl.formatMessage({ id: 'carousel.home.two.title' })}
        />
        <CarouselItem
          imageUri={'images/hero04.png'}
          subtitle={intl.formatMessage({ id: 'carousel.home.three.subtitle' })}
          desc={intl.formatMessage({ id: 'carousel.home.three.desc' })}
          actionText={intl.formatMessage({
            id: 'carousel.home.one.button-text',
          })}
          title={intl.formatMessage({ id: 'carousel.home.three.title' })}
        />
      </Carousel>
    </div>
  );
};

Hero.propTypes = {
  title: T.string,
  description: T.string,
  actionText: T.string,
};

export default Hero;
