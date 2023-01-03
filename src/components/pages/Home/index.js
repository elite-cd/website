import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";

import T from "prop-types";
import * as React from "react";
import { ROUTES } from "../../../common/constants";
import ButtonOutlined from "../../Button/button-outlined";
import ButtonPrimary from "../../Button/button-primary";
import Carousel from "../../Carousel";
import Page from "../../PageTemplate";
import CourseItem from "./CourseItem";
import * as style from "./Home.module.scss";

const Home = ({ carouselItems }) => {
  const intl = useIntl();
  const InternalPage = ({ courses }) => {
    return (
      <React.Fragment>
        <Carousel items={carouselItems} />
        <div className={style.row__center}>
          <h3 className={style.typography3}>
            {intl.formatMessage({ id: "content.homepage.elite.title" })}
          </h3>
          <p className={style.typography6}>
            {intl.formatMessage({ id: "content.homepage.elite.decription" })}
          </p>
        </div>
        <section className={style.course__section}>
          <div className={style.courselist}>
            {courses.map((course, i) => (
              <CourseItem
                key={"course-" + i}
                title={course.title}
                outlined={i % 2 === 0}
                timeline={course.timeline}
                descTitle={course.shortDescription}
                outcomes={course.outcomes}
                image={course.image}
              />
            ))}
          </div>
        </section>
        <h3 className={style.about__header}>
          Pourquoi choisir l'académie des élites ?
        </h3>
        <section className={style.about__container}>
          <div className={style.about__box}>
            <StaticImage
              alt="mentor"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/mentor.png"}
            />
            <p className={style.about__title}>
              Mentors de niveau international
            </p>
            <div className={style.about__overlay}>
              <div className={style.about__popup}>
                <h2>Here i am</h2>
                <a className={style.close}>&times;</a>
                <div className={style.content}>
                  <p className={style.about__desc}>
                    Les programmes offerts sont soigneusement préparés par des
                    mentors congolais qui ont bénéficié d’une éducation
                    internationale au Canada et aux USA et évoluent dans des
                    entreprises de renom dans le domaine de la technologie
                    telles que Microsoft (USA) et Rhetorik (Canada)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.about__box}>
            <StaticImage
              alt="mentor"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/qualify.png"}
            />
            <p className={style.about__title}>Coach Qualifiés et pratiquants</p>
          </div>
          <div className={style.about__box}>
            <StaticImage
              alt="mentor"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/computer.png"}
            />
            <p className={style.about__title}>Lab Creative (Canada)</p>
          </div>
          <div className={style.about__box}>
            <StaticImage
              alt="mentor"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/pedagogie.png"}
            />
            <p className={style.about__title}>Methode Harkness (USA)</p>
          </div>
          <div className={style.about__box}>
            <StaticImage
              alt="mentor"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/professional.png"}
            />
            <p className={style.about__title}>
              Environnement Professionnel et Sérieux
            </p>
          </div>
          <div className={style.about__box}>
            <StaticImage
              alt="mentor"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/certificat.png"}
            />
            <p className={style.about__title}>Certificat</p>
          </div>
        </section>
        <section className={style["help__section"]}>
          <h3 className={style["help__main__title"]}>Besoin d&apos;une aide</h3>
          <p className={style["help__main__desc"]}>
            Vous avez une question ? Notre équipe est là pour vous répondre du
            lundi au vendredi de 9h00 à 19h00, heure en France métropolitaine.
          </p>
          <div className={style["help__main__button"]}>
            <ButtonOutlined leftIcon={faEnvelope} text={"Nous ecrire"} />
            <span className={style["help__main__space"]}></span>
            <ButtonOutlined leftIcon={faPhone} text={"Nous appeler"} />
          </div>
          <h3 className={style["help__main__title"]}>
            Restez informé de nos nouveautés
          </h3>
          <p className={style["help__main__desc"]}>
            Inscrivez-vous à notre newsletter pour recevoir en avant-première
            les dernières tendances du digital, ainsi que toutes nos actus.
          </p>
          <div className={style["help__main__button"]}>
            <input
              type={"text"}
              name={"email"}
              placeholder={"Entrer votre email"}
              className={style["help__main__input"]}
            />
            <span className={style["help__main__space"]}></span>
            <ButtonPrimary text={"S'insrire"} />
          </div>
        </section>
      </React.Fragment>
    );
  };
  return (
    <Page activeRoute={ROUTES.INDEX}>
      {(courses) => <InternalPage courses={courses} />}
    </Page>
  );
};

Home.propTypes = {
  carouselItems: T.array,
  courses: T.array,
};

export default Home;
