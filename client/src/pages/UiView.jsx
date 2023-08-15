import Hero from '../components/Hero';
import CollectionCards from '../components/CollectionCards';
import TrendingProducts from '../components/TrendingProducts';

export default function UiTest() {
  return (
    <main className="w-full">
      <Hero />
      {/* <TrendingProducts /> */}
      <CollectionCards />
    </main>
  );
}
