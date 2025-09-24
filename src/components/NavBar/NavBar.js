import { NavLink, Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link to='/' className={styles.icon + ' fa fa-tasks '} aria-label="Home"></Link>

          <ul className={styles.links}>
            <li><NavLink to='/' className={({ isActive}) => isActive ? styles.linkActive : undefined}>Home</NavLink></li>
            <li><NavLink to='/favorite' className={({ isActive}) => isActive ? styles.linkActive : undefined}>Favorite</NavLink></li>
            <li><NavLink to='/about' className={({ isActive}) => isActive ? styles.linkActive : undefined}>About</NavLink></li>
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;