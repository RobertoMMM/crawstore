import styles from 'features/navbar/components/drawer/index.module.sass';
import ContainedButton from '../../../../components/button/contained';

const Drawer = ({ close }: any) => {
  return (
    <div className={styles.drawer}>
      <div className={styles.header}>
        <ContainedButton text={'Close'} onClick={close} />
      </div>
      <div className={styles.body}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>Item 1</li>
          <li className={styles.menuItem}>Item 2</li>
          <li className={styles.menuItem}>Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
