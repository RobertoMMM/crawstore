import Image from 'next/image';
import Logo from 'assets/Logo.svg';
import styles from 'components/modules/homepage/navbar/index.module.sass';
import Menu from './components/menu';
import ContainedButton from '../../../common/button/contained';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo className={styles.image} />
      <button className={styles.navBurgerButton} onClick={() => {}}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      <Menu />
      <ContainedButton
        className={styles.button}
        text={'Try for free'}
        onClick={() => {}}
      />
    </nav>
  );
};

export default Navbar;
