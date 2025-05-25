import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput  placeholder='Search...'/>
            {/* <Button text='Search' /> */}
            {/* <Button>Search</Button> */}
            <Button>
                <span className='fa fa-search' />
            </Button>
        </form>
    );
};

export default SearchForm;