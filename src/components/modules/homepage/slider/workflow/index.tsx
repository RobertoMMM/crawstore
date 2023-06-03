import React, { useState } from 'react';
import OutlinedButton from '../../../../common/button/outlined';
import Image from 'next/image';
import { Navigation } from 'swiper';
import './index.sass';
import { slides } from './static';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Typography from '../../../../common/typography';

const WorkFlowSlider = () => {
  const [swiper, setSwiper] = useState<any>();

  return (
    <section className={'information'}>
      <div className={'actions'}>
        {slides.map(({ button: { text, icon: SlideIcon } }, index) => (
          <OutlinedButton
            key={index}
            text={
              <div className={'buttonBody'}>
                <SlideIcon key={index} className={'buttonIcons'} />
                <Typography variant={'subtitle2'} weight={'regular'}>
                  {text}
                </Typography>
              </div>
            }
            onClick={() => swiper?.slideTo(index)}
          />
        ))}
      </div>
      <Swiper
        className={'slider'}
        spaceBetween={50}
        modules={[Navigation]}
        navigation
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {slides.map(({ title, image, description }, index) => (
          <SwiperSlide className={'slide'} key={index}>
            <div className={'text'}>
              <Typography className={'main'} variant={'h2'} Component={'span'}>
                {title}
              </Typography>
              <Typography
                className={'secondary'}
                variant={'subtitle2'}
                Component={'span'}
                weight={'regular'}
              >
                {description}
              </Typography>
            </div>
            <Image src={image} alt={'slideImage'} className={'image'} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WorkFlowSlider;
