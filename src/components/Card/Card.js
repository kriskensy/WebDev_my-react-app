import { useDispatch } from 'react-redux';
import FavoriteCardButton from '../FavoriteCardButton/FavoriteCardButton';
import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/store';

const Card = (props) => {

  const dispatch = useDispatch();

  const handleClick = () =>{
    dispatch(toggleCardFavorite(props.id));
  }

  return (
    <li className={styles.card}>{props.title} 
      <FavoriteCardButton isFavorite={props.isFavorite} onClick={handleClick}/>
    </li>
  );
};

export default Card;