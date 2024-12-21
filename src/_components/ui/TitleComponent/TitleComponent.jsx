import styles from './title.module.scss';
const TitleComponent = ({ size, content }) => {
  const sizes = {
    lg: '16px',
    s: '14px',
    m: '16px',
    l: '18px',
  };
  const style = {
    fontSize: sizes[size],
  };

  return (
    <h1 className={styles['heading']} style={style}>
      {content}
    </h1>
  );
};

export default TitleComponent;
