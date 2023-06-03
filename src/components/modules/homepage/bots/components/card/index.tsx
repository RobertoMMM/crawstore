import React from 'react';
import Typography from '../../../../../common/typography';
import DownloadGray from '../../../../../../assets/icons/downloadGray.svg';
import './index.sass';

interface Props {
  title: string;
  downloads: string | number;
  description: string;
  author: { icon: any; name: string };
  TitleIcon: any;
  link: { icon: any; text: string };
}

const Card = ({
  TitleIcon,
  title,
  downloads,
  link: { icon: LinkIcon, text },
  description,
  author: { icon: AuthorIcon, name },
}: Props) => {
  return (
    <div className={'card'}>
      <div className={'content'}>
        <div className={'title'}>
          <TitleIcon className={'image'} />
          <Typography className={'text'} variant={'h4'}>
            {title}
          </Typography>
        </div>
      </div>
      <div className={'breakLine'}></div>
      <div className={'content'}>
        <div className={'link'}>
          <LinkIcon className={'image'} />
          <Typography weight={'regular'} className={'text'} variant={'h4'}>
            {text}
          </Typography>
        </div>
        <Typography
          weight={'regular'}
          className={'description'}
          variant={'subtitle2'}
        >
          {description}
        </Typography>
        <footer className={'footer'}>
          <div className={'author'}>
            <AuthorIcon className={'image'} />
            <Typography weight={'regular'} className={'name'} variant={'h6'}>
              {name}
            </Typography>
          </div>
          <div className={'download'}>
            <DownloadGray className={'image'} />
            <Typography weight={'regular'} className={'text'} variant={'h6'}>
              {downloads}
            </Typography>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Card;
