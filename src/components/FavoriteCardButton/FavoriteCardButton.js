import styles from './FavoriteCardButton.module.scss';
import clsx from 'clsx';

const FavoriteCardButton = (props) =>{
  return (
    <button 
      className={clsx(styles.favIcon, { [styles.active]: props.isFavorite })}
      onClick={props.onClick}
    >
      <i className={clsx('fa', props.isFavorite ? 'fa-star' : 'fa-star-o')}></i>
    </button>
  );
}

export default FavoriteCardButton;