import T from 'prop-types';
import style from './style.module.scss';
const SelectGroup = ({ label, name, data, required }) => {
  return (
    <div className={style['form-group']}>
      <label className={style['form-label']}>
        {label} {required && <span className={style['required-field']}>*</span>}
      </label>
      <select
        required={required ? true : false}
        className={style['form-control']}
        name={name}
      >
        <option>-selectionner-</option>
        {data &&
          data.map((opt, i) => (
            <option key={`option-${i}`} value={opt.name}>
              {opt.label}
            </option>
          ))}
      </select>
    </div>
  );
};

SelectGroup.propTypes = {
  label: T.string.isRequired,
  name: T.string,
  data: T.array.isRequired,
};

export default SelectGroup;
