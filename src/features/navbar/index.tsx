import Image from 'next/image';
import Logo from 'assets/Logo.svg';
import styles from 'features/navbar/index.module.sass';
import Menu from './components/menu';
import ContainedButton from '../../components/button/containedButton';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image src={Logo} alt={'logo'} />
      <button className={styles.navBurgerButton} onClick={() => {}}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      <Menu />
      <ContainedButton
        className={styles.special}
        text={'Try for free'}
        onClick={() => {}}
      />
    </nav>
  );
};

export default Navbar;
