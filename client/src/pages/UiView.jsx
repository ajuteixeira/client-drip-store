import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CollectionCards from '../components/CollectionCards';
import TrendingProducts from '../components/TrendingProducts';
import Header from '../components/Header';
import NavbarItem from '../components/NavbarItem';
import ProductShow from '../components/ProductShow';

export default function UiTest() {
  return (
    <main className="min-w-full">
      <Header/>
      <NavbarItem/>
      <ProductShow/>
      <Footer/>
    </main>
  );
}
