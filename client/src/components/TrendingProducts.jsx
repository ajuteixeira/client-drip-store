import { cardsInfo } from '../utils/cardsMock';
import Subtitles from './Subtitles';
import Card from './Card';

export default function TrendingProducts() {
  return (
    <main className="w-full grid gap-x-4 gap-y-8 grid-rows-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-7 bg-[#f5f5f5] sm:p-20">
      {cardsInfo.map((card) => {
        return (
          <Card
            key={card.id}
            discountPercentual={card.discountPercentual}
            category={card.category}
            productName={card.productName}
            discountPrice={card.discountPrice}
            price={card.price}
            isDiscount={card.isDiscount}
            url={card.url}
          />
        );
      })}
    </main>
  );
}
