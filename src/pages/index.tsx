import MainLayout from '../layouts/main';
import { ReactElement } from 'react';
import Image from 'next/image';
import HomeLogo from 'assets/homeLogo.svg';
import styles from 'pages/index.module.sass';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed');
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <section className={styles.section}>
      <Image src={HomeLogo} className={styles.logo} alt={'homeLogo'} />
      <div className={styles.title}>Crawless Store —</div>
      <div className={styles.title}>the shortest way to create your bots</div>
      <div className={styles.description}>
        Browse ready-made tasks and workflows
      </div>
      <div className={styles.description}>
        from the growing developers community around the world
      </div>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">There you go 1</div>
        <div className="keen-slider__slide">There you go 2</div>
        <div className="keen-slider__slide">There you go 3</div>
      </div>
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
