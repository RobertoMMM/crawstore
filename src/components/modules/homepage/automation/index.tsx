import './index.sass';
import AutoLeft from '../../../../assets/automationLeft.svg';
import ContainedButton from '../../../common/button/contained';
import AutoRight from '../../../../assets/automationRight.svg';
import { figures } from './static';
import Typography from '../../../common/typography';

const Automation = () => {
  return (
    <section className={'automation'}>
      <AutoLeft className={'leftImage'} />
      <div className={'content'}>
        <Typography className={'title'} variant={'h2'} weight={'light'}>
          Build web automation bots faster then ever using crawless
        </Typography>
        <Typography className={'description'} variant={'h5'} weight={'regular'}>
          Join the community of developers from all over the world that rely on
          crawless
        </Typography>
        <div className={'dataFigures'}>
          {figures.map(({ text, value }, index) => (
            <div className={'figure'} key={index}>
              <div className={'value'}>{value}</div>
              <Typography className={'text'} variant={'h6'} weight={'bold'}>
                {text}
              </Typography>
            </div>
          ))}
        </div>
        <ContainedButton text={'Get started now'} onClick={() => {}} />
      </div>
      <AutoRight className={'rightImage'} />
    </section>
  );
};

export default Automation;
