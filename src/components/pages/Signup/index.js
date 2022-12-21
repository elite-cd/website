import * as React from 'react';
import ButtonPrimary from '../../Button/button-primary';
import Page from '../../PageTemplate';
import RadioGroup from '../../RadioGroup';
import RadioInput from '../../RadioInput';
import TextInput from '../../TextInput';
import * as style from './Signup.module.scss';
const Enregistrement = () => {
  const renderSignupPage = () => {
    return (
      <React.Fragment>
        <div className={style.container}>
          <p className={style.navigation}>
            {'Accueil > Contact >'}
            <span className={style['navigation__selected']}>
              Enregistrement
            </span>
          </p>
          <h3 className={style['page__title']}>Contact</h3>
          <div className={style['page__header']}>
            <h3 className={style.title}>Enregistrement</h3>
            <p className={style.subtitle}>
              Débutez votre cursus de formation avec Elite !
            </p>
          </div>

          <form id="signupform" className={style.form}>
            <TextInput
              label={'Nom complet'}
              required
              placeholder={'Entrer nom'}
              name={'nom'}
            />
            <TextInput
              label={'Age'}
              required
              placeholder={'Entrer votre age'}
              name={'age'}
            />
            <TextInput
              label={'Profession'}
              required
              placeholder={'Entrer votre profession'}
              name={'profession'}
            />
            <TextInput
              label={'Email'}
              required
              type={'email'}
              placeholder={'Entrer votre email'}
              name={'profession'}
            />
            <TextInput
              label={'Numéro Whatsapp'}
              required
              type={'tel'}
              placeholder={'Votre numéro de téléphone Whatsapp'}
              name={'phone'}
            />
            <TextInput
              label={'Adresse physique'}
              required
              type={'text'}
              placeholder={'Votre adresse'}
              name={'address'}
            />
            <RadioGroup label={'Quel  est votre niveau en programmation?'}>
              <RadioInput
                name={'experience'}
                label={"J'ai des notions d'alphabétisation numérique"}
              />
              <RadioInput name={'experience'} label={"Je n'ai aucun niveau"} />
              <RadioInput
                name={'experience'}
                label={'Je suis développeur Pro'}
              />
              <RadioInput
                name={'experience'}
                label={"Je m'y connais en programme d'immersion en Entreprise"}
              />
            </RadioGroup>
            <RadioGroup
              label={'Pour quel programme souhaitez-vous vous inscrire?'}
            >
              <RadioInput
                name={'experience'}
                multichoice
                label={'Alphabétisation Numérique'}
              />
              <RadioInput
                name={'experience'}
                multichoice
                label={'Les bases de la programmation'}
              />
              <RadioInput
                name={'experience'}
                multichoice
                label={"Programme d'immersion en Entreprise"}
              />
            </RadioGroup>
            <TextInput
              label={'Pourquoi souhaitez-vous faire cette formation?'}
              required
              type={'text'}
              placeholder={''}
              name={'address'}
            />
            <RadioGroup label={'Avez-vous un Ordinateur portable?'}>
              <RadioInput name={'experience'} label={'Oui'} />
              <RadioInput name={'experience'} label={'Non'} />
            </RadioGroup>
            <div className={style['button__section']}>
              <ButtonPrimary text={"S'INSCRIRE"} />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  };

  return <Page>{renderSignupPage}</Page>;
};

export default Enregistrement;
