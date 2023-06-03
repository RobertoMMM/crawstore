import styles from 'components/modules/homepage/navbar/components/menu/menuItem/menuItem.module.sass';

interface Props {
  text: string;
}

const MenuItem = ({ text }: Props) => {
  return <li className={styles.menuItem}>{text}</li>;
};

export default MenuItem;
