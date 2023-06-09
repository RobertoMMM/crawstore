import './index.sass';
import Company1 from '../../../../assets/icons/companies/1.svg';
import Company2 from '../../../../assets/icons/companies/2.svg';
import Company3 from '../../../../assets/icons/companies/3.svg';
import Company4 from '../../../../assets/icons/companies/4.svg';
import Company5 from '../../../../assets/icons/companies/5.svg';
import Company6 from '../../../../assets/icons/companies/6.svg';

const companies = [Company1, Company2, Company3, Company4, Company5, Company6];

const Companies = () => {
  return (
    <section className={'companies'}>
      {companies.map((Icon, index: number) => (
        <Icon key={index} className={'company'} />
      ))}
    </section>
  );
};

export default Companies;
