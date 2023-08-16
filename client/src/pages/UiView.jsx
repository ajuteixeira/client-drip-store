import Footer from '../components/Footer';
import Footericons from '../components/FooterIcons';
import Hero from '../components/Hero';
import CollectionCards from '../components/CollectionCards';
import TrendingProducts from '../components/TrendingProducts';

export default function UiTest() {
  return (
    <main className="min-w-full">
      <Footer />
      <Footericons />
      <CollectionCards />
      <Hero />
      <TrendingProducts />
    </main>
  );
}
