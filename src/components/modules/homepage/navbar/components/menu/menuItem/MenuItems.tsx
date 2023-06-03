import 'components/modules/homepage/navbar/components/menu/menuItem/menuItem.sass';

interface Props {
  text: string;
}

const MenuItem = ({ text }: Props) => {
  return <li className={'menuItem'}>{text}</li>;
};

export default MenuItem;
