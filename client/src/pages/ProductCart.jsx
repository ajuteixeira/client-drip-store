import Footer from '../components/Footer';
import Header from '../components/Header';
import fotoSapato from '../assets/images/fotoSapato.png';
import { cardsInfo } from '../utils/cardsMock';
import Card from '../components/Card';

export default function ProductCart() {
  return (
    <>
      <Header />

      <div className="bg-[#f5f5f5] w-full pt-4">
        <div className="px-24 ">
          <div className="mb-8 ">
            <th className="titulo">Meu Carrinho</th>
            <th className="subTitulos ">Quantidade</th>
            <th className="subTitulos ">Unitário</th>
            <th className="subTitulos ">Total</th>
          </div>

          <div className=" flex">
            <div className="w-1/2 flex  overflow-hidden mt-5 justify-between mb-14">
              <img src={fotoSapato} alt="fotosapato"></img>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="referencia">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </p>
                  <div className="divCores">
                    <span className="cor">Cor:</span>
                    <span className="tipoDeCor">Vemelho/branco</span>
                  </div>
                  <div className="divCores">
                    <span className="cor">Tamanho:</span>
                    <span className="tipoDeCor">42</span>
                  </div>

                  <div className="precoNormal">R$ 219,00</div>
                  <div className="precoDeVenda">R$ 219,00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="divInfoAdicional">
            <div className="divInfo">
              <span className="estiloInfo">Cupom de desconto</span>
              <div className="divAcao">
                <input className="input" placeholder="Insira seu código" />
                <button className="botaoOk">ok</button>
              </div>
            </div>
            <div className="divInfo">
              <span className="estiloInfo">Calcular frete</span>
              <div className="divAcao">
                <input className="input" placeholder="Insira seu CEP" />
                <button className="botaoOk">ok</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <h3 className="text-[#474747] font-extrabold text-xl tracking-wide mb-4">
            Produtos Relacionados
          </h3>
          <div>
            <p>Ver todos</p>
          </div>
        </div>
        <div className="flex justify-between">
          {cardsInfo.map((card, i) => {
            return i < 4 ? (
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
            ) : (
              ''
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
