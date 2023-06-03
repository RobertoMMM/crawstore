import styles from './index.module.sass';
import { Pagination } from 'swiper';
import { CSSProperties, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { people } from './static';
import ArrowRight from 'assets/icons/arrowLongRight.svg';
import ArrowLeft from 'assets/icons/arrowLongLeft.svg';
import Arrow from './components/arrows';

const sliderStyles = {
  '--swiper-pagination-bottom': '0px',
  '--swiper-pagination-color': '#5C53F3',
  '--swiper-pagination-bullet-inactive-color': '#3E3D4C',
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-size': '16px',
} as CSSProperties;

const ReviewSlider = () => {
  const [swiper, setSwiper] = useState<any>();
  const [activeSlide, setActiveSlide] = useState(0);

  const isActivePrevButton = activeSlide > 0;
  const isActiveNextButton = activeSlide < people.length - 1;

  const handleNavigateNext = () => {
    swiper?.slideNext();
  };

  const handleNavigatePrev = () => {
    swiper?.slidePrev();
  };

  return (
    <section className={styles.reviews}>
      <div className={styles.title}>Trusted the world over</div>
      <div className={styles.description}>
        Businesses and dev teams of every size have already made crawless their
        main web automation platform
      </div>
      <div className={styles.sliderContainer}>
        <Arrow
          onClick={handleNavigatePrev}
          disabled={!isActivePrevButton}
          orientation={'left'}
        />
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
          {people.map(({ job, image: AuthorIcon, quote, name }, index) => (
            <SwiperSlide className={styles.slide} key={index}>
              <div className={styles.content}>
                <div className={styles.quote}>{quote}</div>
                <AuthorIcon className={styles.image} />
                <div className={styles.name}>{name}</div>
                <div className={styles.job}>{job}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Arrow
          onClick={handleNavigateNext}
          disabled={!isActiveNextButton}
          orientation={'right'}
        />
      </div>
    </section>
  );
};

export default ReviewSlider;
