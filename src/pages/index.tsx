import MainLayout from '../layouts/main';
import styles from 'pages/index.module.sass';
import HomePage from '../components/modules/homepage/header';
import Bots from '../components/modules/homepage/bots';
import Shop from '../components/modules/homepage/shop';
import Alternatives from '../components/modules/homepage/alternatives';
import Companies from '../components/modules/homepage/companies';
import Benefits from '../components/modules/homepage/benefits';
import Automation from '../components/modules/homepage/automation';
import WorkFlowSlider from '../components/modules/homepage/slider/workflow';
import ReviewSlider from '../components/modules/homepage/slider/review';
import { ReactElement } from 'react';
import Products from '../components/modules/homepage/products';
import Resources from '../components/modules/homepage/resources';
import Footer from '../components/modules/homepage/footer';

export default function Home() {
  return (
    <section className={styles.section}>
      <HomePage />
      <WorkFlowSlider />
      <Bots />
      <Shop />
      <Alternatives />
      <Benefits />
      <ReviewSlider />
      <Companies />
      <Automation />
      <Products />
      <Resources />
      <div className={styles.breakLine}></div>
      <Footer />
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
