import './index.sass';
import { Pagination } from 'swiper';
import { CSSProperties, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { people } from './static';
import Arrow from './components/arrows';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Typography from '../../../../common/typography';

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
    <section className={'reviews'}>
      <Typography className={'title'} variant={'h2'} weight={'light'}>
        Trusted the world over
      </Typography>
      <Typography
        className={'description'}
        variant={'subtitle1'}
        weight={'regular'}
      >
        Businesses and dev teams of every size have already made crawless their
        main web automation platform
      </Typography>
      <div className={'sliderContainer'}>
        <Arrow
          onClick={handleNavigatePrev}
          disabled={!isActivePrevButton}
          orientation={'left'}
        />
        <Swiper
          className={'slider'}
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
            <SwiperSlide className={'slide'} key={index}>
              <div className={'content'}>
                <Typography className={'quote'} variant={'h5'}>
                  {quote}
                </Typography>
                <AuthorIcon className={'image'} />
                <Typography className={'name'} weight={'bold'} variant={'h6'}>
                  {name}
                </Typography>
                <Typography className={'job'} weight={'regular'} variant={'h6'}>
                  {job}
                </Typography>
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
