import MainLayout from '../layouts/main';
import { ReactElement, useState } from 'react';
import Image from 'next/image';
import styles from 'pages/index.module.sass';
import 'keen-slider/keen-slider.min.css';
import MainImage from 'assets/rightImage.svg';
import OutlinedButton from '../components/button/outlined';
import DownloadIcon from 'assets/icons/download.svg';
import ShareIcon from 'assets/icons/share.svg';
import BracketsIcon from 'assets/icons/brackets.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import ContainedButton from '../components/button/contained';
import MDown from 'assets/icons/mdown.svg';
import Company1 from 'assets/icons/companies/1.svg';
import Company2 from 'assets/icons/companies/2.svg';
import Company3 from 'assets/icons/companies/3.svg';
import Company4 from 'assets/icons/companies/4.svg';
import Company5 from 'assets/icons/companies/5.svg';
import Company6 from 'assets/icons/companies/6.svg';
import AutoLeft from 'assets/automationLeft.svg';
import AutoRight from 'assets/automationRight.svg';
import IDE from 'assets/icons/ide.svg';
import AgreementIcon from 'assets/icons/confirm.svg';
import SmallLogo from 'assets/icons/logoSmall.svg';
import FacebookIcon from 'assets/icons/socialMedia/facebook.svg';
import TwitterIcon from 'assets/icons/socialMedia/twitter.svg';
import InstagramIcon from 'assets/icons/socialMedia/instagram.svg';
import StackoverflowIcon from 'assets/icons/socialMedia/stackoverflow.svg';
import LinkedIcon from 'assets/icons/socialMedia/linkedin.svg';
import HomePage from '../features/homepage';
import Bots from '../features/bots';
import Shop from '../features/shop';
import Alternatives from '../features/alternatives';

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
];

export const benefits = [
  {
    title: 'Private namespace, share link',
    description:
      'Sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin. Morbi tincidunt augue interdum velit euismod in pellentesque massa. ',
    icon: MDown,
  },
  {
    title: 'Private namespace, share link',
    description:
      'Sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin. Morbi tincidunt augue interdum velit euismod in pellentesque massa. ',
    icon: MDown,
  },
  {
    title: 'Private namespace, share link',
    description:
      'Sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin. Morbi tincidunt augue interdum velit euismod in pellentesque massa. ',
    icon: MDown,
  },
  {
    title: 'Private namespace, share link',
    description:
      'Sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin. Morbi tincidunt augue interdum velit euismod in pellentesque massa. ',
    icon: MDown,
  },
  {
    title: 'Private namespace, share link',
    description:
      'Sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin. Morbi tincidunt augue interdum velit euismod in pellentesque massa. ',
    icon: MDown,
  },
  {
    title: 'Private namespace, share link',
    description:
      'Sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin. Morbi tincidunt augue interdum velit euismod in pellentesque massa. ',
    icon: MDown,
  },
];

const figures = [
  {
    value: 411,
    text: 'Workflows in Store',
  },
  {
    value: 1205,
    text: 'Tasks in Store',
  },
  {
    value: 4230,
    text: 'Active users',
  },
  {
    value: 11820,
    text: 'Unique installs',
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

export default function Home() {
  const [swiper, setSwiper] = useState<any>();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className={styles.section}>
      <HomePage />
      <section className={styles.information}>
        <div className={styles.actions}>
          <OutlinedButton
            text={
              <div className={styles.buttonBody}>
                <Image
                  src={DownloadIcon}
                  className={styles.buttonIcons}
                  alt={'download'}
                />
                On click install
              </div>
            }
            className={styles.button}
            onClick={() => {}}
          />
          <OutlinedButton
            text={
              <div className={styles.buttonBody}>
                <Image
                  src={ShareIcon}
                  className={styles.buttonIcons}
                  alt={'download'}
                />
                Share
              </div>
            }
            onClick={() => {}}
          />
          <OutlinedButton
            text={
              <div className={styles.buttonBody}>
                <Image
                  src={BracketsIcon}
                  className={styles.buttonIcons}
                  alt={'download'}
                />
                Version control system
              </div>
            }
            onClick={() => {}}
          />
        </div>
      </section>
      <Bots />
      <Shop />
      <Alternatives />
      <section className={styles.automation}>
        <Image src={AutoLeft} alt={'autoLeft'} className={styles.leftImage} />
        <div className={styles.content}>
          <div className={styles.title}>
            Build web automation bots faster then ever using crawless
          </div>
          <div className={styles.description}>
            Join the community of developers from all over the world that rely
            on crawless
          </div>
          <div className={styles.dataFigures}>
            {figures.map(({ text, value }, index) => (
              <div className={styles.figure} key={index}>
                <div className={styles.value}>{value}</div>
                <div className={styles.text}>{text}</div>
              </div>
            ))}
          </div>
          <ContainedButton text={'Get started now'} onClick={() => {}} />
        </div>
        <Image
          src={AutoRight}
          alt={'autoRight'}
          className={styles.rightImage}
        />
      </section>
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
      {/*<Swiper*/}
      {/*  // className={styles.slider}*/}
      {/*  navigation={true}*/}
      {/*  spaceBetween={50}*/}
      {/*  modules={[Navigation]}*/}
      {/*  slidesPerView={1}*/}
      {/*  onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}*/}
      {/*  onSwiper={(swiper) => setSwiper(swiper)}*/}
      {/*>*/}
      {/*  {slides.map(({ title, image, description }, index) => (*/}
      {/*    <SwiperSlide className={`number-slide${index}`} key={index}>*/}
      {/*      <div className={styles.text}>*/}
      {/*        <span className={styles.main}>{title}</span>*/}
      {/*        <span className={styles.secondary}>{description}</span>*/}
      {/*      </div>*/}
      {/*      <Image src={image} alt={'main-image'} className={styles.image} />*/}
      {/*    </SwiperSlide>*/}
      {/*  ))}*/}
      {/*</Swiper>*/}
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
