import HomeLogo from '../../../../assets/homeLogo.svg';
import './index.sass';
import Typography from '../../../common/typography';

const HomePage = () => {
  return (
    <header className={'header'}>
      <HomeLogo className={'logo'} />
      <Typography variant={'h1'} weight={'light'}>
        Crawless Store —
      </Typography>
      <Typography variant={'h1'} weight={'light'}>
        the shortest way to create your bots
      </Typography>
      <Typography
        variant={'subtitle1'}
        weight={'regular'}
        className={'description'}
      >
        Browse ready-made tasks and workflows from the growing developers
        community around the world
      </Typography>
    </header>
  );
};

export default HomePage;
