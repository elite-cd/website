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
            <span className={style.sitename}>
              {intl.formatMessage({ id: "sitename" })}
            </span>
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
                outcomes={course.outcomes.split(",")}
                image={course.image}
              />
            ))}
          </div>
        </section>
        <section className={style["mag__section"]}>
          <div className={style.container__md}>
            <h3 className={style["mag__title"]}>Découvrez nos actualités</h3>

            <div className={style["articlelist"]}>
              <div className={style["articlemain"]}>
                <StaticImage
                  alt={"article"}
                  className={style.articlemain__image}
                  src={"../../../assets/images/magazine-article.png"}
                />
                <h3 className={style["articlemain__title"]}>
                  L’innovation au coeur de nos activités
                </h3>
                <p className={style["articlemain__desc"]}>
                  Convallis non proin ac bibendum. At pharetra sed ultrices
                  semper. Lectus et ornare ultrices urna in. Id non fringilla
                  dignissim ac risus amet eget egestas vestibulum. Aliquet etiam
                  eget nulla nulla odio vel.
                </p>
                <ButtonPrimary text={"En savoir plus"} />
              </div>
              <div className={style["articleaside"]}>
                <div className={style.container__md}>
                  <StaticImage
                    alt={"aside"}
                    className={style.articleaside__image}
                    src={"../../../assets/images/aside01.png"}
                  />
                  <h3 className={style["articleaside__title"]}>TECH</h3>
                  <span className={style["articleaside__tag"]}>TECH</span>
                  <p className={style["articleaside__desc"]}>
                    Black Friday 2022 : PC portable, smartphone, écouteurs
                    Bluetooth à prix mini. Lectus et ornare ultrices urna in. Id
                    non fringilla dignissim ac risus amet eget egestas
                    vestibulum. Aliquet etiam eget nulla nulla odio vel.
                  </p>
                  <p className={style["articleaside__date"]}>
                    ACTUALITÉ • 24/11/2022
                  </p>
                  <ButtonPrimary text={"En savoir plus"} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style["about__section"]}>
          <div className={style.container__md}>
            <div className={style["grid"]}>
              <div className={style["about__main"]}>
                <h3 className={style["about__main__title"]}>
                  A propos
                  <br />
                  <span>d&apos;Elite</span>
                </h3>
                <p className={style["about__main__desc"]}>
                  Interiart is an award-winning architecture and interior design
                  practice based in NYC. We work internationally on projects of
                  residential & commercial interior design that require a
                  creative approach. Our talented and experienced designers
                  leverage their knowledge and expertise to create unique and
                  comfortable interiors for you. Our team knows that interior
                  design can be stressful for the client and we do our best to
                  make it as easy as possible. We listen to your needs, ideas,
                  and inputs. And most importantly, we make it exciting and
                  enjoyable for our clients. <br /> <br /> Interiart is an
                  award-winning architecture and interior design practice based
                  in NYC. We work internationally on projects of residential &
                  commercial interior design that require a creative approach.
                  Our talented and our best to make it as easy as possible. We
                  listen to your needs, ideas, and inputs. <br /> <br />
                  And most importantly, we make it exciting and enjoyable for
                  our clients. Interiart is an award-winning architecture and
                  interior design practice based in NYC. We work internationally
                  on projects of residential & commercial interior design that
                  require a creative approach. Our talented and experienced
                  designers leverage their knowledge and expertise to create
                  unique and comfortable interiors for you. Our team knows that
                  ideas, and inputs. And most importantly, we make it exciting
                  and enjoyable for our clients.
                </p>
                <ButtonPrimary text={"En savoir plus"} />
              </div>
              <div className={style["about__aside"]}>
                <StaticImage
                  alt={"article"}
                  src={"../../../assets/images/apropos-img.jpg"}
                />
              </div>
            </div>
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
