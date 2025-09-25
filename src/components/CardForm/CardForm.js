import { useState } from 'react';
import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const CardForm = props => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ columnId: props.columnId, title }));
    setTitle('');
  }

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;