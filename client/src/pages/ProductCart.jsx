import Footer from '../components/Footer';
import Header from '../components/Header';
import fotoSapato from '../assets/images/fotoSapato.png';
import { cardsInfo } from '../utils/cardsMock';
import Card from '../components/Card';
import Resumo from '../components/Resume';

export default function ProductCart() {
  return (
    <>
      <Header />

      <div className="bg-[#f5f5f5] w-full pt-4 ">
        <div className="mx-24 bg-white mt-24 flex">
          <div className='w-3/4 px-8 bg-white '>
            <div className="flex ">
              <div className="titulo w-1/2 font-bold text-gray-600 tracking-wider">MEU CARRINHO</div>
                <div className='w-1/2 flex justify-between text-gray-600 tracking-wider'>
                  <div className="subTitulos ">QUANTIDADE</div>
                  <div className="subTitulos ">UNITÁRIO</div>
                  <div className="subTitulos ">TOTAL</div>
                </div>
                
            </div>
            <div className='bg-[#f5f5f5] h-[2px] text-center '></div>
          <div className=" flex items-center">
            <div className="w-1/2 flex justify-between h-56 items-center">
              <div className='flex justify-center items-center h-40 w-56 bg-blue-100 rounded-lg'>
                <img src={fotoSapato} alt="fotosapato" className='h-14'></img>
              </div>
              
              <div className="flex flex-col gap-4 ml-8 ">
                <div className='flex flex-col h-40 justify-between gap-4 '>
                  <p className="referencia font-bold text-slate-600">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </p>
                  <div className="divCores flex">
                    <div className="cor">Cor: </div>
                    <div className="tipoDeCor"> Vemelho / branco</div>
                  </div>
                    <div className="cor">Tamanho: 42</div>
                    
                  

                  
                </div>
              </div>
            </div>
            <div className='w-1/2 flex justify-between items-start'>
              <div>
                <div className='flex gap-6 items-center'>
                <button type='radio' className='b1 border-solid border-gray-300 border-2 rounded-md w-9 h-9' name='tamanho'>-</button>
                <p>1</p>
                <button type='radio' className='b1 border-solid border-gray-300 border-2  rounded-md w-9 h-9' name='tamanho'>+</button>
                </div>
                <p className='m-3 underline underline-offset-2'>Remover item</p>
                
              </div>
 
            <div className=''>
              R$ 219,00
            </div>
            <div>
            R$ 219,00
            </div>
            </div>
            

          </div>
          <div className='bg-[#f5f5f5] h-[2px] text-center'></div>
          <div className="divInfoAdicional flex gap-10">
            <div className="divInfo ">
            <span className="estiloInfo font-bold text-gray-600 ">Cupom de desconto</span>
              <div className="divAcao">
                <input className="input border-solid border-gray-300 border-2 p-3 rounded-md" placeholder="Insira seu código" />
                <button type='radio' className=' ml-3 b5 border-solid border-gray-300 border-2 p-3 rounded-md text-pink-600 ' name='tamanho'>OK</button>

              </div>
            </div>
            <div className="divInfo">
              <span className="estiloInfo font-bold text-gray-600">Calcular frete</span>
              <div className="divAcao">
                <input className="input border-solid border-gray-300 border-2 p-3 rounded-md" placeholder="Insira seu CEP" />
                <button type='radio' className=' ml-3 b5 border-solid border-gray-300 border-2 p-3 rounded-md text-pink-600 ' name='tamanho'>OK</button>
              </div>
            </div>
          </div>
          
          </div>
            <Resumo />
        </div>

        <div className="flex justify-between mt-40">
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
