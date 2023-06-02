import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import AutoLeft from '../../assets/automationLeft.svg';
import ContainedButton from '../../components/button/contained';
import AutoRight from '../../assets/automationRight.svg';
import { figures } from './static';

const Automation = () => {
  return (
    <section className={styles.automation}>
      <Image src={AutoLeft} alt={'autoLeft'} className={styles.leftImage} />
      <div className={styles.content}>
        <div className={styles.title}>
          Build web automation bots faster then ever using crawless
        </div>
        <div className={styles.description}>
          Join the community of developers from all over the world that rely on
          crawless
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
      <Image src={AutoRight} alt={'autoRight'} className={styles.rightImage} />
    </section>
  );
};

export default Automation;
