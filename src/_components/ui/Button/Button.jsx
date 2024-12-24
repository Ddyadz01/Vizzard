import style from './button.module.scss';

const Button = ({ type = 'default', size, text, onClickFn, isActive = false }) => {
  const sizes = {
    s: '12px',
    l: '14px',
    base: '16px',
    xl: '18px',
  };
  return (
    <button
      onClick={onClickFn}
      className={`${style[type]} ${
        isActive ? `${style['active']}  ${style[type]}` : `button  ${style[type]}`
      }`}
      style={{ fontSize: sizes[size] }}
    >
      {text}
    </button>
  );
};

export default Button;
