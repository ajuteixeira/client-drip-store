import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CollectionCards from '../components/CollectionCards';
import TrendingProducts from '../components/TrendingProducts';
import Header from "../components/Header";
import NavbarItem from '../components/NavbarItem';

export default function UiTest() {
  return (
    <main className="min-w-full">
      <Header/>
      <NavbarItem/>
      <Hero />
      <CollectionCards />
      <TrendingProducts />
      <Footer />
    </main>
  );
}
