import { GatsbyImage, getImage } from "gatsby-plugin-image";
import T from "prop-types";
import * as React from "react";
import { ButtonLink } from "../../../Button";
import * as style from "./CourseItem.module.scss";
const CourseItem = ({
  title,
  timeline,
  descTitle,
  outcomes,
  outlined,
  image,
}) => {
  const classNameVariation = outlined ? "__outlined" : "";
  console.log(outcomes);
  return (
    <div className={style.wrapper}>
      <GatsbyImage
        fluid={image.childImageSharp.fluid}
        objectFit={"contain"}
        alt={`${title} image`}
        className={style.item__image}
        image={getImage(image)}
      />
      <div className={style["item" + classNameVariation]}>
        <div className={style.header}>
          <h3 className={style["headertitle" + classNameVariation]}>{title}</h3>
        </div>
        <div className={style.body}>
          <h3 className={style.bodytitle}>{descTitle}</h3>
          <p className={style.outcomes}>{outcomes}</p>
          <p className={style.text_bold}>
            Durée: <span className={style.text_regular}>3 mois</span>
          </p>
          <p className={style.text_bold}>
            Prix: <span className={style.text_regular}>100$/mois</span>
          </p>
        </div>
        {outlined ? (
          <ButtonLink className={"button__primary"} text={"En savoir plus"} />
        ) : (
          <ButtonLink className={"button__outlined"} text={"En savoir plus"} />
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
