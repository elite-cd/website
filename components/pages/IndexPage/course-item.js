import T from 'prop-types';
import ButtonOutlined from '../../Button/button-outlined';
import ButtonPrimary from '../../Button/button-primary';
import style from './style.module.scss';
const CourseItem = ({ title, timeline, descTitle, outcomes, outlined }) => {
  const classNameVariation = outlined ? '-outlined' : '';
  return (
    <div className={style['item' + classNameVariation]}>
      <div className={style.header}>
        <h3 className={style['header-title' + classNameVariation]}>{title}</h3>
        <p className={style['header-timeline']}>{timeline}</p>
        <hr className={style.hr} />
      </div>
      <div className={style.body}>
        <h3 className={style['body-title']}>{descTitle}</h3>
        <ul className={style['body-list']}>
          {outcomes &&
            outcomes.map((outcome, index) => {
              return (
                <li
                  className={style['body-list-item']}
                  key={`outcome-${index}`}
                >
                  {outcome}
                </li>
              );
            })}
        </ul>
      </div>
      {outlined ? (
        <ButtonPrimary text={'En savoir plus'} />
      ) : (
        <ButtonOutlined text={'En savoir plus'} />
      )}
    </div>
  );
};

CourseItem.propTypes = {
  title: T.string.isRequired,
  timeline: T.string,
  descTitle: T.string.isRequired,
  outcomes: T.arrayOf(T.string),
  outlined: T.bool,
};

export default CourseItem;
