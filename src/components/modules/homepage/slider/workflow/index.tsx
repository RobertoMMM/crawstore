import React, { useState } from 'react';
import OutlinedButton from '../../../../common/button/outlined';
import Image from 'next/image';
import { Navigation } from 'swiper';
import styles from './index.module.sass';
import { slides } from './static';
import { Swiper, SwiperSlide } from 'swiper/react';

const WorkFlowSlider = () => {
  const [swiper, setSwiper] = useState<any>();

  return (
    <section className={styles.information}>
      <div className={styles.actions}>
        {slides.map(({ button: { text, icon: SlideIcon } }, index) => (
          <OutlinedButton
            key={index}
            text={
              <div className={styles.buttonBody}>
                <SlideIcon key={index} className={styles.buttonIcons} />
                {text}
              </div>
            }
            className={styles.button}
            onClick={() => swiper?.slideTo(index)}
          />
        ))}
      </div>
      <Swiper
        className={styles.slider}
        spaceBetween={50}
        modules={[Navigation]}
        navigation
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {slides.map(({ title, image, description }, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <div className={styles.text}>
              <span className={styles.main}>{title}</span>
              <span className={styles.secondary}>{description}</span>
            </div>
            <Image src={image} alt={'slideImage'} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WorkFlowSlider;
