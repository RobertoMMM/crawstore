import Image from 'next/image';
import HomeLogo from '../../../../assets/homeLogo.svg';
import styles from './index.module.sass';

const HomePage = () => {
  return (
    <header className={styles.header}>
      <HomeLogo className={styles.logo} />
      <div className={styles.title}>Crawless Store —</div>
      <div className={styles.title}>the shortest way to create your bots</div>
      <div className={styles.description}>
        Browse ready-made tasks and workflows from the growing developers
        community around the world
      </div>
    </header>
  );
};

export default HomePage;
