import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import T from 'prop-types';
import * as React from 'react';
import ButtonOutlined from '../../../Button/button-outlined';
import ButtonPrimary from '../../../Button/button-primary';
import * as style from './CourseItem.module.scss';
const CourseItem = ({
  title,
  timeline,
  descTitle,
  outcomes,
  outlined,
  image,
}) => {
  const classNameVariation = outlined ? '__outlined' : '';
  return (
    <div className={style.wrapper}>
      <GatsbyImage
        fluid={image.childImageSharp.fluid}
        objectFit={'contain'}
        alt={`${title} image`}
        className={style.item__image}
        image={getImage(image)}
      />
      <div className={style['item' + classNameVariation]}>
        <div className={style.header}>
          <h3 className={style['headertitle' + classNameVariation]}>{title}</h3>
          <p className={style.header__timeline}>{timeline}</p>
        </div>
        <hr className={style.hr} />
        <div className={style.body}>
          <h3 className={style.bodytitle}>{descTitle}</h3>
          <ul className={style.bodylist}>
            {outcomes &&
              outcomes.map((outcome, index) => {
                return (
                  <li
                    className={style.bodylist__item}
                    key={`outcome__${index}`}
                  >
                    {outcome}
                  </li>
                );
              })}
          </ul>
        </div>
        {outlined ? (
          <ButtonPrimary text={'En savoir plus'} />
        ) : (
          <ButtonOutlined text={'En savoir plus'} />
        )}
      </div>
    </div>
  );
};

CourseItem.propTypes = {
  title: T.string.isRequired,
  timeline: T.string,
  descTitle: T.string.isRequired,
  outcomes: T.arrayOf(T.string),
  outlined: T.bool,
};

export default CourseItem;
