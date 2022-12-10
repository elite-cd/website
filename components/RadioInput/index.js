import T from 'prop-types';
import style from './style.module.scss';
const RadioInput = ({ label, name }) => {
  return (
    <div className={style['form-control']}>
      <input name={name} type={'radio'} />
      <label className={style['form-label']}>{label}</label>
    </div>
  );
};

RadioInput.propTypes = {
  label: T.string.isRequired,
};

export default RadioInput;
