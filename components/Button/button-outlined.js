import Button from './index';

const ButtonOutlined = ({ text, leftIcon }) => {
  return (
    <Button leftIcon={leftIcon} className={'button-outlined'} text={text} />
  );
};

export default ButtonOutlined;
