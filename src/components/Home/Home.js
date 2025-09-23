import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import Lists from '../Lists/Lists';
import './Home.module.scss';

const Home = () => {
  return (
    <Container>
      <Hero/>
      <Lists/>
    </Container>
  );
}

export default Home;