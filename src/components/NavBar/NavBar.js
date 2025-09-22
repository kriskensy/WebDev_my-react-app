import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.container}>
          <span className={styles.icon + ' fa fa-tasks '}></span>

          <ul className={styles.links}>
            <li>Home</li>
            <li>Favorite</li>
            <li>About</li>
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;