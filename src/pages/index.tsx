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
import ReviewSlider from '../components/modules/homepage/slider/review';

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

export default function Home() {
  return (
    <section className={styles.section}>
      <HomePage />
      <WorkFlowSlider />
      <Bots />
      <Shop />
      <Alternatives />
      <Benefits />
      <ReviewSlider />
      <Companies />
      <Automation />
      <section className={styles.products}>
        {products.map(({ icon: Icon, title, description }, index) => (
          <div key={index} className={styles.product}>
            <Icon className={styles.icon} />
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <OutlinedButton text={'Explore'} onClick={() => {}} />
          </div>
        ))}
      </section>
      <section className={styles.resources}>
        <div className={styles.links}>
          {links.map(({ title: Title, children }, index) => (
            <div key={index} className={styles.row}>
              {typeof Title === 'string' ? (
                <div className={styles.title}>{Title}</div>
              ) : (
                <Title className={styles.title} />
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
            <AgreementIcon className={styles.agreementIcon} />
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
          <FacebookIcon src={FacebookIcon} />
          <TwitterIcon src={TwitterIcon} />
          <InstagramIcon src={InstagramIcon} />
          <StackoverflowIcon src={StackoverflowIcon} />
          <LinkedIcon src={LinkedIcon} />
        </div>
      </footer>
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
