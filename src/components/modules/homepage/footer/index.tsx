import './index.sass';
import FacebookIcon from '../../../../assets/icons/socialMedia/facebook.svg';
import TwitterIcon from '../../../../assets/icons/socialMedia/twitter.svg';
import InstagramIcon from '../../../../assets/icons/socialMedia/instagram.svg';
import StackoverflowIcon from '../../../../assets/icons/socialMedia/stackoverflow.svg';
import LinkedIcon from '../../../../assets/icons/socialMedia/linkedin.svg';
import Typography from '../../../common/typography';

const Footer = () => {
  return (
    <footer className={'pageFooter'}>
      <div className={'links'}>
        <Typography variant={'subtitle2'}>
          Copyright © 2019—2020 Crawless
        </Typography>
        <Typography variant={'subtitle2'}>Legal</Typography>
        <Typography variant={'subtitle2'}>Privacy & Security</Typography>
        <Typography variant={'subtitle2'}>Cookies</Typography>
      </div>
      <div className={'socialMedia'}>
        <FacebookIcon src={FacebookIcon} />
        <TwitterIcon src={TwitterIcon} />
        <InstagramIcon src={InstagramIcon} />
        <StackoverflowIcon src={StackoverflowIcon} />
        <LinkedIcon src={LinkedIcon} />
      </div>
    </footer>
  );
};

export default Footer;
