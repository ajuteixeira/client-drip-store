import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CollectionCards from '../components/CollectionCards';
import TrendingProducts from '../components/TrendingProducts';
import Header from "../components/Header";
import NavbarItem from '../components/NavbarItem';
import ProductShow from '../components/ProductShow';
import MyRequests from './MyRequests';

export default function Products() {
  return (
    <main className="min-w-full">
      <Header/>
      <NavbarItem/>
      <ProductShow/>
      <Footer/>
    </main>
  );
}
