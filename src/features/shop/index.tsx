import styles from './index.module.sass';
import OutlinedButton from '../../components/button/outlined';
import Image from 'next/image';
import ShopImage from 'assets/shop.svg';

const Shop = () => {
  return (
    <section className={styles.sellBots}>
      <div className={styles.content}>
        <div className={styles.header}>Next checkpoint in our Roadmap</div>
        <div className={styles.title}>Sell your bots in crawless store</div>
        <div className={styles.description}>
          Whether you are a developer or not, you can make money on our network
          by renting out your computers capacity
        </div>
        <OutlinedButton text={'Contact us'} onClick={() => {}} />
      </div>
      <Image src={ShopImage} alt={'shop'} className={styles.image} />
    </section>
  );
};

export default Shop;
