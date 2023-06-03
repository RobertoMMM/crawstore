import './index.sass';
import OutlinedButton from '../../../common/button/outlined';
import ShopImage from 'assets/shop.png';
import Image from 'next/image';
import Typography from '../../../common/typography';

const Shop = () => {
  return (
    <section className={'sellBots'}>
      <div className={'content'}>
        <Typography className={'header'} weight={'regular'} variant={'h5'}>
          Next checkpoint in our Roadmap
        </Typography>
        <Typography className={'title'} variant={'h2'}>
          Sell your bots in crawless store
        </Typography>
        <Typography className={'description'} variant={'h5'}>
          Whether you are a developer or not, you can make money on our network
          by renting out your computers capacity
        </Typography>
        <OutlinedButton text={'Contact us'} onClick={() => {}} />
      </div>
      <Image src={ShopImage} alt={'shop'} className={'image'} />
    </section>
  );
};

export default Shop;
