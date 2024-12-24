import style from './album-item.module.scss';
import TitleComponent from '@components/ui/TitleComponent/TitleComponent';
const AlbumItem = ({ item }) => {
  return (
    <div className={style['album--item']}>
      <img src={item.album_image_url} alt="" />
      <TitleComponent content={item.album_name} size="l" />
      <p>{item.year}</p>
    </div>
  );
};

export default AlbumItem;
