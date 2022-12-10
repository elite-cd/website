import Button from './index';

const ButtonPrimary = ({ text, leftIcon }) => {
  return (
    <Button leftIcon={leftIcon} className={'button-primary'} text={text} />
  );
};

export default ButtonPrimary;
