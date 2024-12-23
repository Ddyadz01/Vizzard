import PopularSongs from './PopularSongs/PopularSongs';
import style from './home.module.scss';
const Home = () => {
  return (
    <div className={style['home--page']}>
      <PopularSongs />
    </div>
  );
};

export default Home;
