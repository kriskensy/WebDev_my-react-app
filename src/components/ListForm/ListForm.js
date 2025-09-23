import { useDispatch } from 'react-redux';
import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { addList } from '../../redux/store';
import TextInput from '../TextInput/TextInput';

const ListForm = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({title, description}));
    setTitle('');
    setDescription('');
  }

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <label className={styles.label}>Title: </label>
      <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
      <label className={styles.label}>Description: </label>
      <TextInput value={description} onChange={e => setDescription(e.target.value)}/>
      <Button>Add list</Button>
    </form>
  );
}

export default ListForm;