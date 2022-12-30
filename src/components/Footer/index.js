import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as style from "./style.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style["footer__certification"]}>
        <h3 className={style["footer__title"]}>Certification</h3>
        <p className={style["footer__desc"]}>
          A la fin de chaque formation, une certification est offerte aux
          apprennant, après la réussite à l’examen.
          <br />
          <br /> Nos certifications sont reconnues internationalement et sont
          respectées dans le milieu professionnel.
        </p>
      </div>
      <div className={style["footer__partner"]}>
        <h3 className={style["footer__title"]}>Partenaires</h3>
        <ul>
          <li>Développez vos compétences professionnelles.</li>
          <li>Suivez une formation innovantes.</li>
          <li>Obtenez une certification reconnue.</li>
          <li>Elite propose des stages en alternance.</li>
        </ul>
      </div>
      <div className={style["footer__elite"]}>
        <h3 className={style["footer__title"]}>Elite</h3>
        <ul>
          <li>Qui sommes nous ?</li>
          <li>Opportunités</li>
          <span className={style["footer__section"]}>Pour les entreprises</span>
          <li>Recherche des talents</li>
          <li>Nous faire un don</li>
        </ul>
      </div>
      <div className={style["footer__contact"]}>
        <h3 className={style["footer__title"]}>Télécharger</h3>
        <div className={style["footer__logo_wrapper"]}>
          <StaticImage
            className={style.logo_app}
            src={"../../assets/images/image1.png"}
            alt={"Hero Image loading"}
          />
          <StaticImage
            className={style.logo_app}
            src={"../../assets/images/image2.png"}
            alt={"Hero Image loading"}
          />
        </div>
        <p className={style["footer__contact__text"]}>Contact</p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +243 810 000 000
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> contact@elite.com
        </p>
        <p>
          <FontAwesomeIcon icon={faLocationPin} /> 278, Tabora, C/Gombe
        </p>
      </div>
    </div>
  );
};

export default Footer;
