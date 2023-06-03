import './index.sass';
import ContainedButton from '../../../common/button/contained';
import AgreementIcon from '../../../../assets/icons/confirm.svg';
import { links } from './static';
import Typography from '../../../common/typography';

const Resources = () => {
  return (
    <section className={'resources'}>
      <div className={'links'}>
        {links.map(({ title: Title, children }, index) => (
          <div key={index} className={'row'}>
            {typeof Title === 'string' ? (
              <Typography variant={'h6'} className={'title'} weight={'bold'}>
                {Title}
              </Typography>
            ) : (
              <Title className={'title'} />
            )}
            {children.map((text, index) => (
              <Typography
                key={index}
                variant={'h6'}
                className={'link'}
                weight={'bold'}
              >
                {text}
              </Typography>
            ))}
          </div>
        ))}
      </div>
      <form className={'form'}>
        <Typography variant={'h5'} className={'title'} weight={'bold'}>
          Tell me about new Crawless features as they come out
        </Typography>
        <input type={'email'} placeholder={'Email ...'} className={'email'} />
        <ContainedButton text={'Subscribe'} onClick={() => {}} />
        <div className={'agreement'}>
          <AgreementIcon className={'agreementIcon'} />
          <Typography variant={'subtitle2'} weight={'regular'}>
            By submitting this form, I agree to the Crawless Privacy Policy
          </Typography>
        </div>
      </form>
    </section>
  );
};

export default Resources;
