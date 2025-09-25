import { useDispatch } from 'react-redux';
import FavoriteCardButton from '../FavoriteCardButton/FavoriteCardButton';
import RemoveCardButton from '../RemoveCardButton/RemoveCardButton';
import styles from './Card.module.scss';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = (props) => {

  const dispatch = useDispatch();

  const handleToggleCardFavoriteClick = () => {
    dispatch(toggleCardFavorite(props.id));
  }

  const handleRemoveCardClick = () => {
    dispatch(removeCard(props.id));
  }

  return (
    <li className={styles.card}>{props.title}
      <section>
        <FavoriteCardButton isFavorite={props.isFavorite} onClick={handleToggleCardFavoriteClick} />
        <RemoveCardButton onClick={handleRemoveCardClick} />
      </section>
    </li>
  );
};

export default Card;