import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import Lists from '../Lists/Lists';
import SearchForm from '../SearchForm/SearchForm';
import './Home.module.scss';

const Home = () => {
  return (
    <Container>
      <Hero/>
      <SearchForm/>
      <Lists/>
    </Container>
  );
}

export default Home;