import styles from './index.module.sass';
import { benefits } from './static';
import Image from 'next/image';

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      {benefits.map(({ title, description, icon: Icon }, index) => (
        <div key={index} className={styles.card}>
          <Icon className={styles.image} />
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      ))}
    </section>
  );
};

export default Benefits;