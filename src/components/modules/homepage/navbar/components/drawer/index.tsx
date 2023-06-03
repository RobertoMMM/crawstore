import 'components/modules/homepage/navbar/components/drawer/index.sass';
import ContainedButton from '../../../../../common/button/contained';

const Drawer = ({ close }: any) => {
  return (
    <div className={'drawer'}>
      <div className={'header'}>
        <ContainedButton text={'Close'} onClick={close} />
      </div>
      <div className={'body'}>
        <ul className={'menu'}>
          <li className={'menuItem'}>Item 1</li>
          <li className={'menuItem'}>Item 2</li>
          <li className={'menuItem'}>Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
