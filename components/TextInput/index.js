import T from 'prop-types';
import style from './style.module.scss';
const TextInput = ({ label, name, placeholder, type, required }) => {
  return (
    <div className={style['form-group']}>
      <label className={style['form-label']}>
        {label}
        {required && <span className={style['required-field']}>*</span>}
      </label>
      <input
        required={required ? true : false}
        type={type ? type : 'text'}
        className={style['form-control']}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: T.string.isRequired,
  placeholder: T.string,
};

export default TextInput;
