import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CollectionCards from '../components/CollectionCards';
import TrendingProducts from '../components/TrendingProducts';

export default function UiTest() {
  return (
    <main className="min-w-full">
      <Navbar/>
      <Hero />
      <CollectionCards />
      <TrendingProducts />
      <Footer />
    </main>
  );
}
