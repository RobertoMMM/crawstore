import MenuItem from './menuItem/MenuItems';
import styles from 'components/modules/homepage/navbar/components/menu/index.module.sass';

const menuItems = [
  {
    value: 'For business',
  },
  {
    value: 'Products',
  },
  {
    value: 'Resources',
  },
  {
    value: 'Store',
  },
];

const Menu = () => {
  return (
    <ul className={styles.list}>
      {menuItems.map(({ value }, index) => (
        <MenuItem key={index} text={value} />
      ))}
    </ul>
  );
};

export default Menu;
