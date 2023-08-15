import { cardsInfo } from '../utils/cardsMock';
import Subtitles from './Subtitles';
import Card from './Card';

export default function TrendingProducts() {
  return (
    <main className="w-full p-20 bg-[#f5f5f5]">
      <div className="w-full">
        <div className="flex items-center justify-between">
          <Subtitles type="secondary">Produtos em alta</Subtitles>
          <a href="#" className="text-[#C92071]">
            Ver todos ➝
          </a>
        </div>
        <div className="w-full grid grid-cols-2 gap-[30px] lg:grid-cols-3 xl:grid-cols-4 ">
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
      </div>
    </main>
  );
}
