import ButtonPrimary from '../../Button/button-primary';
import PageTemplate from '../../PageTemplate';
import RadioGroup from '../../RadioGroup';
import RadioInput from '../../RadioInput';
import SelectGroup from '../../SelectGroup';
import TextInput from '../../TextInput';
import style from './style.module.scss';
const Enregistrement = () => {
  const COHORTS = [
    { label: 'Session Janvier 2023', value: '202301' },
    { label: 'Session Août 2023', value: '202306' },
  ];

  const PROGRAMMES = [
    { label: 'Développement Web', value: 'webdev' },
    { label: 'Backend développement', value: 'backend' },
    { label: 'Data Analytics', value: 'analytics' },
  ];

  return (
    <PageTemplate>
      <div className={style.container}>
        <p className={style.navigation}>
          {'Accueil > Contact >'}
          <span className={style['navigation-selected']}>Enregistrement</span>
        </p>
        <h3 className={style['page-title']}>Contact</h3>
        <div className={style['page-header']}>
          <h3 className={style.title}>Enregistrement</h3>
          <p className={style.subtitle}>
            Débutez votre cursus de formation avec Elite !
          </p>
        </div>

        <form id="signupform" className={style.form}>
          <TextInput
            label={'Prénom'}
            required
            placeholder={'Entrer votre prénom'}
            name={'firstname'}
          />
          <TextInput
            label={'Nom'}
            required
            placeholder={'Entrer votre noom'}
            name={'name'}
          />
          <TextInput
            label={'Téléphone'}
            required
            type={'tel'}
            placeholder={'Votre numéro de téléphone'}
            name={'phone'}
          />
          <RadioGroup label={"Avez-vous de l'expérience en programmation?"}>
            <RadioInput name={'experience'} label={'Oui'} />
            <RadioInput name={'experience'} label={'Non'} />
          </RadioGroup>
          <RadioGroup
            label={
              'Pouvez-vous vous consacrer entièrement au programme durant 16 semaines?'
            }
          >
            <RadioInput name={'experience'} label={'Oui'} />
            <RadioInput name={'experience'} label={'Non'} />
          </RadioGroup>
          <SelectGroup
            label={'Veuillez séléctionner une cohorte'}
            required
            data={COHORTS}
          />
          <SelectGroup label={'Programme'} required data={PROGRAMMES} />
          <div className={style['button-section']}>
            <ButtonPrimary text={"S'INSCRIRE"} />
          </div>
        </form>
      </div>
    </PageTemplate>
  );
};

export default Enregistrement;
