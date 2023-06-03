import './index.sass';
import OutlinedButton from '../../../common/button/outlined';
import { products } from './static';
import Typography from '../../../common/typography';

const Products = () => {
  return (
    <section className={'products'}>
      {products.map(({ icon: Icon, title, description }, index) => (
        <div key={index} className={'product'}>
          <Icon className={'icon'} />
          <Typography className={'title'} variant={'h2'}>
            {title}
          </Typography>
          <Typography className={'description'} variant={'subtitle1'}>
            {description}
          </Typography>
          <OutlinedButton text={'Explore'} onClick={() => {}} />
        </div>
      ))}
    </section>
  );
};

export default Products;
