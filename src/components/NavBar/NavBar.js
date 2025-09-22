import { NavLink, Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link to='/' className={styles.icon + ' fa fa-tasks '} aria-label="Home"></Link>

          <ul className={styles.links}>
            <li><NavLink to='/' className={({ isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to='/about' className={({ isActive}) => isActive ? "active" : ""}>About</NavLink></li>
            <li><NavLink to='/faovorite' className={({ isActive}) => isActive ? "active" : ""}>Favorite</NavLink></li>
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;