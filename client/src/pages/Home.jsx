import Header from '../components/Header';
import Hero from '../components/Hero';
import CollectionCards from '../components/CollectionCards';
import TrendingProducts from '../components/TrendingProducts';
import CardShoes from '../components/CardShoes';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CollectionCards />
      <TrendingProducts />
      <CardShoes />
      <Footer />
    </>
  );
}
