import styles from './RemoveCardButton.module.scss';

const RemoveCardButton = (props) => {
  return (
    <button className={styles.trashIcon} onClick={props.onClick}>
      <i className='fa fa-trash'></i>
    </button>
  );
}

export default RemoveCardButton;