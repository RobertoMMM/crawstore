import './index.sass';
import { benefits } from './static';
import Typography from '../../../common/typography';

const Benefits = () => {
  return (
    <section className={'benefits'}>
      {benefits.map(({ title, description, icon: Icon }, index) => (
        <div key={index} className={'card'}>
          <Icon className={'image'} />
          <Typography className={'title'} variant={'h3'}>
            {title}
          </Typography>
          <Typography
            className={'description'}
            variant={'subtitle2'}
            weight={'regular'}
          >
            {description}
          </Typography>
        </div>
      ))}
    </section>
  );
};

export default Benefits;
