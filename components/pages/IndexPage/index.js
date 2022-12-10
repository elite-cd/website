import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import { useIntl } from 'react-intl';
import ButtonOutlined from '../../Button/button-outlined';
import ButtonPrimary from '../../Button/button-primary';
import Hero from '../../Hero';
import PageTemplate from '../../PageTemplate';
import CourseItem from './course-item';
import style from './style.module.scss';
const IndexPage = () => {
  const intl = useIntl();
  const imageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q${quality || 5}`;
  };
  return (
    <PageTemplate>
      <Hero />
      <section className={style['course-section']}>
        <div className={style['centered-row']}>
          <h3 className={style.typography3}>
            {intl.formatMessage({ id: 'content.homepage.elite.title' })}
            <span className={style.sitename}>
              {intl.formatMessage({ id: 'sitename' })}
            </span>
          </h3>
          <p className={style.typography6}>
            {intl.formatMessage({ id: 'content.homepage.elite.decription' })}
          </p>
        </div>
        <div className={style['course-list']}>
          <CourseItem
            title={'Alphabetisation numérique'}
            timeline={'300 $'}
            descTitle={
              'Maitrisez les outils du numerique actuel'
            }
            outlined
            outcomes={[
              'Savoir utiliser son ordinateur',
              'Savoir utiliser les outils bureautiques',
              "Optimiser vos recherches",
              'Les outils collaboratifs',
              'Rediger et envoyer un email ',
            ]}
          />
          <CourseItem
            title={'Les bases de la programmation'}
            timeline={'400 $'}
            descTitle={
              'Devenez des développeur et coder vos propres applications'
            }
            outcomes={[
              'La logique de programmation',
              'La programmation web',
            ]}
          />
          <CourseItem
            title={"Programme d'immersion en entreprise"}
            timeline={'500 $'}
            descTitle={
              'Travaillez dans une entreprise de rêves '
            }
            outlined
            outcomes={[
              'Mise à niveau',
              
            ]}
          />
        </div>
      </section>
      <section className={style['mag-section']}>
        <div className={style.container}>
          <h3 className={style['mag-title']}>Découvrez nos actualités</h3>

          <div className={style['article-list']}>
            <div className={style['article-main']}>
              <Image
                className={style['article-main_image']}
                loader={imageLoader}
                src={'images/magazine-article.png'}
                alt={'Hero Image loading'}
                width={500}
                height={300}
              />
              <h3 className={style['article-main_title']}>
                L’innovation au coeur de nos activités
              </h3>
              <p className={style['article-main_desc']}>
               Ce programme vise à acquérir les compétences nécessaires pour utiliser Internet sur d
               es ordinateurs et/ou des appareils mobiles et apprendre à utiliser un ordinateur 
               de manière sûre, sécuritaire et efficace.
              </p>
              <ButtonPrimary text={'En savoir plus'} />
            </div>
            <div className={style['article-aside']}>
              <div className={style.container}>
                <Image
                  className={style['article-aside_image']}
                  loader={imageLoader}
                  src={'images/aside01.png'}
                  alt={'Hero Image loading'}
                  width={500}
                  height={300}
                />
                <h3 className={style['article-aside_title']}>Developpement Web</h3>
                <span className={style['article-aside_tag']}></span>
                <p className={style['article-aside_desc']}>
                  
                </p>
                <p className={style['article-aside_date']}>
                  ACTUALITÉ • 24/11/2022
                </p>
                <ButtonPrimary text={'En savoir plus'} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style['about-section']}>
        <div className={style.container}>
          <div className={style['grid']}>
            <div className={style['about-main']}>
              <h3 className={style['about-main_title']}>
                A propos
                <br />
                <span>d&apos;Elite</span>
              </h3>
              <p className={style['about-main_desc']}>
              L'académie des élites est un espace privilégié d’apprentissage, de connectivité, 
              de partage des connaissances et de créativité et d’innovation mais aussi de 
              professionnalisme qui regroupe des personnes passionnées de la programmation et 
              du développement web.
              La nécessité des programmeurs(développeurs) qualifiés, compétents et professionnels 
              devient de plus en plus pressante. De ce fait l'académie des élites qui regorge en 
              son sein des formateurs expérimentés ayant chacun un parcours exceptionnel pour 
              produire des élites dans le domaine informatique(programmation, développement…), 
              c’est à dire des et ce dans tous les domaines en vue de répondre en temps réel et efficacement au changement que subit le monde. 
            
            <br /> <br /> 
                
              </p>
              <ButtonPrimary text={'En savoir plus'} />
            </div>
            <div className={style['about-aside']}>
              <Image
                className={style['article-aside_image']}
                loader={imageLoader}
                src={'images/apropos-img.jpg'}
                alt={'Hero Image loading'}
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style['help-section']}>
        <h3 className={style['help-main_title']}>Besoin d&apos;une aide</h3>
        <p className={style['help-main_desc']}>
          Vous avez une question ? Notre équipe est là pour vous répondre du
          lundi au vendredi de 9h00 à 19h00, heure en France métropolitaine.
        </p>
        <div className={style['help-main_button']}>
          <ButtonOutlined leftIcon={faEnvelope} text={'Nous ecrire'} />
          <span className={style['help-main_space']}></span>
          <ButtonOutlined leftIcon={faPhone} text={'Nous appeler'} />
        </div>
        <h3 className={style['help-main_title']}>
          Restez informé de nos nouveautés
        </h3>
        <p className={style['help-main_desc']}>
          Inscrivez-vous à notre newsletter pour recevoir en avant-première les
          dernières tendances du digital, ainsi que toutes nos actus.
        </p>
        <div className={style['help-main_button']}>
          <input
            type={'text'}
            name={'email'}
            placeholder={'Entrer votre email'}
            className={style['help-main_input']}
          />
          <span className={style['help-main_space']}></span>
          <ButtonPrimary text={"S'insrire"} />
        </div>
      </section>
    </PageTemplate>
  );
};

export default IndexPage;
