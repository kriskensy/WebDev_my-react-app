import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import styles from './NoFavoriteCards.module.scss';

const NoFavoriteCards = () => {
  return (
    <Container>
      <PageTitle>Favorite</PageTitle>
      <h2 className={styles.subtitle}>No cards...</h2>
    </Container>
  );
}

export default NoFavoriteCards;