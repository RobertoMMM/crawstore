import styles from './index.module.sass';
import { benefits } from './static';
import Image from 'next/image';

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      {benefits.map(({ title, description, icon }, index) => (
        <div key={index} className={styles.card}>
          <Image src={icon} alt={'icon'} className={styles.image} />
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      ))}
    </section>
  );
};

export default Benefits;
