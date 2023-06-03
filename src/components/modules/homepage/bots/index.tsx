import styles from './index.module.sass';
import Image from 'next/image';
import DownloadGray from '../../../../assets/icons/downloadGray.svg';
import ContainedButton from '../../../common/button/contained';
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
              {
                titleIcon: TitleIcon,
                title,
                downloads,
                link: { text, icon: LinkIcon },
                description,
                author: { name, icon: AuthorIcon },
              },
              index
            ) => (
              <div key={index} className={styles.card}>
                <div className={styles.content}>
                  <div className={styles.title}>
                    <TitleIcon className={styles.image} />
                    <div className={styles.text}>{title}</div>
                  </div>
                </div>
                <div className={styles.breakLine}></div>
                <div className={styles.content}>
                  <div className={styles.link}>
                    <LinkIcon className={styles.image} />
                    <div className={styles.text}>{text}</div>
                  </div>
                  <div className={styles.description}>{description}</div>
                  <footer className={styles.footer}>
                    <div className={styles.author}>
                      <AuthorIcon className={styles.image} />
                      <div className={styles.name}>{name}</div>
                    </div>
                    <div className={styles.download}>
                      <DownloadGray className={styles.image} />
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
              {
                titleIcon: TitleIcon,
                title,
                downloads,
                link: { text, icon: LinkIcon },
                description,
                author: { icon: AuthorIcon, name },
              },
              index
            ) => (
              <div key={index} className={styles.card}>
                <div className={styles.content}>
                  <div className={styles.title}>
                    <TitleIcon className={styles.image} />
                    <div className={styles.text}>{title}</div>
                  </div>
                </div>
                <div className={styles.breakLine}></div>
                <div className={styles.content}>
                  <div className={styles.link}>
                    <LinkIcon className={styles.image} />
                    <div className={styles.text}>{text}</div>
                  </div>
                  <div className={styles.description}>{description}</div>
                  <footer className={styles.footer}>
                    <div className={styles.author}>
                      <AuthorIcon className={styles.image} />
                      <div className={styles.name}>{name}</div>
                    </div>
                    <div className={styles.download}>
                      <DownloadGray className={styles.image} />
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
