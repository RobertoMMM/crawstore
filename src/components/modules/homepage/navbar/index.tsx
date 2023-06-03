import Logo from 'assets/Logo.svg';
import './index.sass';
import Menu from './components/menu';
import ContainedButton from '../../../common/button/contained';

const Navbar = () => {
  return (
    <nav className={'navbar'}>
      <Logo className={'image'} />
      <button className={'navBurgerButton'} onClick={() => {}}>
        <span className={'line'}></span>
        <span className={'line'}></span>
        <span className={'line'}></span>
      </button>
      <Menu />
      <ContainedButton
        className={'containedButton'}
        text={'Try for free'}
        onClick={() => {}}
      />
    </nav>
  );
};

export default Navbar;
