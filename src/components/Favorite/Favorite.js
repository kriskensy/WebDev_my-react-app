import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import NoFavoriteCards from '../NoFavoriteCards/NoFavoriteCards';
import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {

  const favoriteCards = useSelector(getFavoriteCards);

  if(!favoriteCards.length) return <NoFavoriteCards>No cards...</NoFavoriteCards>
    return (
      <Container>
        <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
          <ul className={styles.cards}>
            {favoriteCards.map(card =>
              <Card
                key={card.id}
                {...card}
              />)}
          </ul>
        </article>
      </Container>
    )
}

export default Favorite;