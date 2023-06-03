import MenuItem from './menuItem/MenuItems';
import 'components/modules/homepage/navbar/components/menu/index.sass';

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
    <ul className={'list'}>
      {menuItems.map(({ value }, index) => (
        <MenuItem key={index} text={value} />
      ))}
    </ul>
  );
};

export default Menu;
