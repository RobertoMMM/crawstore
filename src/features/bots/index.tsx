import styles from './index.module.sass';
import Image from 'next/image';
import DownloadGray from '../../assets/icons/downloadGray.svg';
import ContainedButton from '../../components/button/contained';
import { bigBotzCards, chips, smallBotzCards } from './static';

const Bots = () => {
  return (
    <section className={styles.bots}>
      <div className={styles.title}>
        Start using bots in your projects right now
      </div>
      <div className={styles.chipContainer}>
        {chips.map((text, index) => (
          <span key={index} className={styles.chip}>
            {text}
          </span>
        ))}
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.small}>
          {smallBotzCards.map(
            (
              { titleIcon, title, downloads, link, description, author },
              index
            ) => (
              <div key={index} className={styles.card}>
                <div className={styles.content}>
                  <div className={styles.title}>
                    <Image
                      src={titleIcon}
                      className={styles.image}
                      alt={'first image'}
                    />
                    <div className={styles.text}>{title}</div>
                  </div>
                </div>
                <div className={styles.breakLine}></div>
                <div className={styles.content}>
                  <div className={styles.link}>
                    <Image
                      src={link.icon}
                      className={styles.image}
                      alt={'first icon'}
                    />
                    <div className={styles.text}>{link.text}</div>
                  </div>
                  <div className={styles.description}>{description}</div>
                  <footer className={styles.footer}>
                    <div className={styles.author}>
                      <Image
                        src={author.icon}
                        className={styles.image}
                        alt={'first author'}
                      />
                      <div className={styles.name}>{author.name}</div>
                    </div>
                    <div className={styles.download}>
                      <Image
                        src={DownloadGray}
                        className={styles.image}
                        alt={'download'}
                      />
                      <div className={styles.text}>{downloads}</div>
                    </div>
                  </footer>
                </div>
              </div>
            )
          )}
        </div>
        <div className={styles.big}>
          {bigBotzCards.map(
            (
              { titleIcon, title, downloads, link, description, author },
              index
            ) => (
              <div key={index} className={styles.card}>
                <div className={styles.content}>
                  <div className={styles.title}>
                    <Image
                      src={titleIcon}
                      className={styles.image}
                      alt={'first image'}
                    />
                    <div className={styles.text}>{title}</div>
                  </div>
                </div>
                <div className={styles.breakLine}></div>
                <div className={styles.content}>
                  <div className={styles.link}>
                    <Image
                      src={link.icon}
                      className={styles.image}
                      alt={'first icon'}
                    />
                    <div className={styles.text}>{link.text}</div>
                  </div>
                  <div className={styles.description}>{description}</div>
                  <footer className={styles.footer}>
                    <div className={styles.author}>
                      <Image
                        src={author.icon}
                        className={styles.image}
                        alt={'first author'}
                      />
                      <div className={styles.name}>{author.name}</div>
                    </div>
                    <div className={styles.download}>
                      <Image
                        src={DownloadGray}
                        className={styles.image}
                        alt={'download'}
                      />
                      <div className={styles.text}>{downloads}</div>
                    </div>
                  </footer>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <ContainedButton text={'Browse more in store'} onClick={() => {}} />
    </section>
  );
};

export default Bots;
