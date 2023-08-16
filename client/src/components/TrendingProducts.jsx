import { cardsInfo } from '../utils/cardsMock';
import Subtitles from './Subtitles';
import Card from './Card';

export default function TrendingProducts() {
  return (
    <main className="p-7 bg-[#F9F8FE] sm:p-20">
      <div className="flex items-center justify-between">
        <Subtitles type="secondary">Produtos em alta</Subtitles>
        <a href="#" className="text-[#C92071]">
          Ver todos ➝
        </a>
      </div>
      <div className="w-full grid gap-x-4 gap-y-8 grid-rows-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
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
      </div>
    </main>
  );
}
