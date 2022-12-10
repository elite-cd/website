import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import T from 'prop-types';
import { ROUTES } from '../../common/constants';
import ButtonRounded from '../Button/button-rounded';
import style from './style.module.scss';
const CarouselItem = ({ imageUri, title, subtitle, desc, actionText }) => {
  const imageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q${quality || 5}`;
  };
  return (
    <div className={style.item}>
      <Image
        className={[style.background, style['mobile-background']].join(' ')}
        loader={imageLoader}
        src={imageUri}
        alt={'Hero Image loading'}
        width={500}
        height={200}
      />
      <div className={style.overlay}>
        <p className={style.title}>
          {title}
          <br />
          <span className={style.subtitle}>{subtitle}</span>
        </p>
        {actionText && (
          <ButtonRounded
            url={ROUTES.SIGNUP}
            rightIcon={faArrowCircleRight}
            text={actionText}
          />
        )}
        <p className={style.desc}>{desc}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  imageUri: T.string,
  title: T.string.isRequired,
  subtitle: T.string,
  desc: T.string,
  actionText: T.string,
};

export default CarouselItem;
