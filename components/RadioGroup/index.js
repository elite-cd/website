import T from 'prop-types';
import style from './style.module.scss';
const RadioGroup = ({ label, children, required }) => {
  return (
    <div className={style['form-group']}>
      <label className={style['form-label']}>
        {label} {required && <span className={style['required-field']}>*</span>}
      </label>
      <div className={style['form-group_children']}>{children}</div>
    </div>
  );
};

RadioGroup.propTypes = {
  label: T.string.isRequired,
};

export default RadioGroup;
