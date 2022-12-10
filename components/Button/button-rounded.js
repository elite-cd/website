import T from 'prop-types';
import { ButtonLink } from './index';
const ButtonRounded = ({ text, rightIcon, onClick, url }) => {
  return (
    <ButtonLink
      onClick={onClick}
      url={url}
      rightIcon={rightIcon}
      className={'button-rounded'}
      text={text}
    />
  );
};

ButtonRounded.propTypes = {
  text: T.string.isRequired,
  rightIcon: T.any,
  onClick: T.func,
};

export default ButtonRounded;
