import Card from '../components/Card';
import FooterIcons from '../components/FooterIcons';
import UnderlinedLink from '../components/UnderlinedLink';
import { cardsInfo } from '../utils/cardsMock';

export default function UiTest() {
  return (
    <main className="min-w-full">
      <div className="w-full">
        <h2 className="font-bold text-center text-3xl">Card</h2>
        <div>
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
      <div>
        <UnderlinedLink text="Cadastre-se" url={'#'} />
        <UnderlinedLink text="Remover item" url={'#'} />
      </div>
      <FooterIcons />
    </main>
  );
}
