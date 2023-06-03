import MainLayout from '../layouts/main';
import { CSSProperties, ReactElement, useState } from 'react';
import Image from 'next/image';
import styles from 'pages/index.module.sass';
import 'keen-slider/keen-slider.min.css';
import MainImage from 'assets/rightImage.svg';
import OutlinedButton from '../components/common/button/outlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ContainedButton from '../components/common/button/contained';
import IDE from 'assets/icons/ide.svg';
import AgreementIcon from 'assets/icons/confirm.svg';
import SmallLogo from 'assets/icons/logoSmall.svg';
import FacebookIcon from 'assets/icons/socialMedia/facebook.svg';
import TwitterIcon from 'assets/icons/socialMedia/twitter.svg';
import InstagramIcon from 'assets/icons/socialMedia/instagram.svg';
import StackoverflowIcon from 'assets/icons/socialMedia/stackoverflow.svg';
import LinkedIcon from 'assets/icons/socialMedia/linkedin.svg';
import HomePage from '../components/modules/homepage/header';
import Bots from '../components/modules/homepage/bots';
import Shop from '../components/modules/homepage/shop';
import Alternatives from '../components/modules/homepage/alternatives';
import Companies from '../components/modules/homepage/companies';
import Benefits from '../components/modules/homepage/benefits';
import Automation from '../components/modules/homepage/automation';
import WorkFlowSlider from '../components/modules/homepage/slider/workflow';

const slides = [
  {
    title: 'Import/export workflow and tasks',
    description:
      'Et malesuada fames ac turpis egestas. Mattis enim ut tellus elementum sagittis vitae. Nisi lacus sed viverra tellus in hac. Tristique sollicitudin nibh sit amet commodo. Blanditturpis cursus in hac habitasse platea.',
    image: MainImage,
  },
  {
    title: 'Import/export workflow and tasks',
    description:
      'Et malesuada fames ac turpis egestas. Mattis enim ut tellus elementum sagittis vitae. Nisi lacus sed viverra tellus in hac. Tristique sollicitudin nibh sit amet commodo. Blanditturpis cursus in hac habitasse platea.',
    image: MainImage,
  },
  {
    title: 'Import/export workflow and tasks',
    description:
      'Et malesuada fames ac turpis egestas. Mattis enim ut tellus elementum sagittis vitae. Nisi lacus sed viverra tellus in hac. Tristique sollicitudin nibh sit amet commodo. Blanditturpis cursus in hac habitasse platea.',
    image: MainImage,
  },
  {
    title: 'Import/export workflow and tasks',
    description:
      'Et malesuada fames ac turpis egestas. Mattis enim ut tellus elementum sagittis vitae. Nisi lacus sed viverra tellus in hac. Tristique sollicitudin nibh sit amet commodo. Blanditturpis cursus in hac habitasse platea.',
    image: MainImage,
  },
];

const products = [
  {
    icon: IDE,
    title: 'Crawless IDE',
    description:
      'Libero volutpat sed cras ornare arcu dui vivamus arcu. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum.\n',
  },
  {
    icon: IDE,
    title: 'Crawless IDE',
    description:
      'Libero volutpat sed cras ornare arcu dui vivamus arcu. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum.\n',
  },
];

const links = [
  {
    title: SmallLogo,
    children: ['Roadmap', 'Roadmap', 'Roadmap', 'Roadmap', 'Roadmap'],
  },
  {
    title: 'Features',
    children: ['Roadmap', 'Roadmap', 'Roadmap', 'Roadmap', 'Roadmap'],
  },
  {
    title: 'For business',
    children: ['Roadmap', 'Roadmap', 'Roadmap'],
  },
  {
    title: 'Resources',
    children: ['Roadmap', 'Roadmap', 'Roadmap', 'Roadmap', 'Roadmap'],
  },
  {
    title: 'Company',
    children: ['Roadmap', 'Roadmap', 'Roadmap', 'Roadmap'],
  },
];

const sliderStyles = {
  '--swiper-pagination-bottom': '0px',
  '--swiper-pagination-color': '#5C53F3',
  '--swiper-pagination-bullet-inactive-color': '#3E3D4C',
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-size': '16px',
} as CSSProperties;

export default function Home() {
  const [swiper, setSwiper] = useState<any>();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className={styles.section}>
      <HomePage />
      <WorkFlowSlider />
      <Bots />
      <Shop />
      <Alternatives />
      <Benefits />
      <Swiper
        className={styles.slider}
        spaceBetween={50}
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        style={sliderStyles}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {slides.map(({ title, image, description }, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <div className={styles.text}>
              <span className={styles.main}>{title}</span>
              <span className={styles.secondary}>{description}</span>
            </div>
            <Image src={image} alt={'main-image'} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Companies />
      <Automation />
      <section className={styles.products}>
        {products.map(({ icon, title, description }, index) => (
          <div key={index} className={styles.product}>
            <Image src={icon} alt={'icon'} className={styles.icon} />
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <OutlinedButton text={'Explore'} onClick={() => {}} />
          </div>
        ))}
      </section>
      <section className={styles.resources}>
        <div className={styles.links}>
          {links.map(({ title, children }, index) => (
            <div key={index} className={styles.row}>
              {typeof title === 'string' ? (
                <div className={styles.title}>{title}</div>
              ) : (
                <Image src={title} alt={'smallicon'} className={styles.title} />
              )}
              {children.map((text, index) => (
                <div key={index} className={styles.link}>
                  {text}
                </div>
              ))}
            </div>
          ))}
        </div>
        <form className={styles.form}>
          <div className={styles.title}>
            Tell me about new Crawless features as they come out
          </div>
          <input
            type={'email'}
            placeholder={'Email ...'}
            className={styles.email}
          />
          <ContainedButton text={'Subscribe'} onClick={() => {}} />
          <div className={styles.agreement}>
            <Image
              src={AgreementIcon}
              alt={'agreement'}
              className={styles.agreementIcon}
            />
            <div className={styles.secondary}>
              By submitting this form, I agree to the Crawless Privacy Policy
            </div>
          </div>
        </form>
      </section>
      <div className={styles.breakLine}></div>
      <footer className={styles.pageFooter}>
        <div className={styles.links}>
          <div>Copyright © 2019—2020 Crawless</div>
          <div>Legal</div>
          <div>Privacy & Security</div>
          <div>Cookies</div>
        </div>
        <div className={styles.socialMedia}>
          <Image src={FacebookIcon} alt={'facebook'} />
          <Image src={TwitterIcon} alt={'twitter'} />
          <Image src={InstagramIcon} alt={'instagram'} />
          <Image src={StackoverflowIcon} alt={'stackoverflow'} />
          <Image src={LinkedIcon} alt={'linkedin'} />
        </div>
      </footer>
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
