import './index.sass';
import ContainedButton from '../../../common/button/contained';
import { bigBotzCards, chips, smallBotzCards } from './static';
import Typography from '../../../common/typography';
import Card from './components/card';

const Bots = () => {
  return (
    <section className={'bots'}>
      <Typography className={'title'} variant={'h2'}>
        Start using bots in your projects right now
      </Typography>
      <div className={'chipContainer'}>
        {chips.map((text, index) => (
          <Typography
            key={index}
            className={'chip'}
            weight={'regular'}
            variant={'subtitle2'}
          >
            {text}
          </Typography>
        ))}
      </div>
      <div className={'cardsContainer'}>
        <div className={'small'}>
          {smallBotzCards.map(
            (
              {
                titleIcon: TitleIcon,
                title,
                downloads,
                link,
                description,
                author,
              },
              index
            ) => (
              <Card
                key={index}
                TitleIcon={TitleIcon}
                title={title}
                description={description}
                author={author}
                link={link}
                downloads={downloads}
              />
            )
          )}
        </div>
        <div className={'big'}>
          {bigBotzCards.map(
            (
              {
                titleIcon: TitleIcon,
                title,
                downloads,
                link,
                description,
                author,
              },
              index
            ) => (
              <Card
                key={index}
                TitleIcon={TitleIcon}
                title={title}
                description={description}
                author={author}
                link={link}
                downloads={downloads}
              />
            )
          )}
        </div>
      </div>
      <ContainedButton text={'Browse more in store'} onClick={() => {}} />
    </section>
  );
};

export default Bots;
