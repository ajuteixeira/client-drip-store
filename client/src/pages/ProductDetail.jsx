import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { cardsInfo } from '../utils/cardsMock'
import Header from '../components/Header'
import CollectionCards from '../components/CollectionCards'
import CollectionCard from '../components/CollectionCard'
import Card from '../components/Card'
import Footer from '../components/Footer'
import fotoSapato from '../assets/images/fotoSapato.png'
import starVazia from '../assets/images/StarVazia.png'
import star from '../assets/images/Star.png'
import Button from '../components/Button'

const ProductDetail = () => {

    let { itemId } = useParams()
    let cardItem = cardsInfo.filter(item => item.id == itemId)
    console.log(cardItem)
    const colors = '#CECDF5'
    const totalAvaliacoes = 90
        
    
    
  return (
    <>
    <Header/>
    <div className='bg-[#f5f5f5] w-full pt-4'>
        <div className='px-24 '>
            <h2 className='mb-8'>Home / Produtos / {cardItem[0].category} / Nike / {cardItem[0].productName}</h2>
                <div className=' flex '>
                    <div className='w-1/2 '>
                            <img src={cardItem[0].url} alt="foto do produto" className={`w-full bg-[${colors}]`}/>
                            
                    </div>
                    <div className='flex flex-col gap-4  w-1/2'>
                       <h2 className='text-3xl text-[#474747] font-bold'>{cardItem[0].productName}</h2>
                       <p className='text-gray-600 tracking-wider'>Casual | {cardItem[0].category} | REF:{cardItem[0].id}</p>
                       <div className='flex gap-1'>
                            <div className='flex'>
                                <img src={star} alt="estrela "  width={10}/>
                                <img src={star} alt="estrela" />
                                <img src={star} alt="estrela" />
                                <img src={star} alt="estrela" />
                                <img src={starVazia} alt="estrela" />
                            </div>
                            <div className='bg-yellow-500 flex text-blue-400 ml-5 rounded-lg'>
                                <p className='text-white font-bold'>4.7</p>
                                <img src={starVazia} alt="estrela" className=''/>
                                
                            </div>
                            <p className='text-[#474747] tracking-wider'>( {totalAvaliacoes} avaliações )</p>
                       </div>
                       <div className='flex items-center'>
                            <div className='price text-[#474747] text-3xl  font-black'>R$ 219,00</div>
                            <div className='price text-slate-400 text-sm ml-2 font-black line-through'>219,00</div>
                       </div>
                       <p className='descript text-gray-400 tracking-wider font-bold'>Descrição do produto</p>
                       <p className='text  text-[#474747]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                       <p className='size text-gray-600 tracking-wider'>Tamanho</p>
                       <div className='flex  justify-between w-1/2 gap-1'>
                            
                            <button type='radio' className='b1 border-solid border-gray-300 border-2 p-3 rounded-md' name='tamanho'>39</button>
                            <button type='radio' className='b2 border-solid border-gray-300 border-2 p-3 rounded-md ' name='tamanho'>40</button>
                            <button type='radio' className='b3 border-solid border-gray-300 border-2 p-3 rounded-md ' name='tamanho'>41</button>
                            <button type='radio' className='b4 border-solid border-gray-300 border-2 p-3 rounded-md ' name='tamanho'>42</button>
                            <button type='radio' className='b5 border-solid border-gray-300 border-2 p-3 rounded-md ' name='tamanho'>43</button>
                       </div>
                       <p className='cor'>Cor</p>
                       <div className=' flex gap-2'>
                            <input className='B1 bg-blue-200 accent-sky-200 'type='radio' name='cor'></input>
                            <input className='B2  bg-orange-200 accent-amber-200'type='radio' name='cor'></input>
                            <input className='B3  bg-red-200 accent-red-200'type='radio' name='cor'></input>
                            <input className='B4  bg-yellow-200 accent-yellow-200'type='radio' name='cor'></input>
                       </div>
                       <Button
                        type='default' color='yellow' >COMPRAR</Button>

                       
                    </div>
            </div>
            <div className='flex   overflow-hidden mt-5 justify-between mb-14 w-1/2'>
                                <div className='w-1/6 bg-blue-200 flex justify-center items-center h-32'>
                                    <img src={fotoSapato} alt="foto de sapato" />
                                </div>
                                <div className='w-1/6 bg-orange-200 flex justify-center items-center h-32'>
                                    <img src={fotoSapato} alt="foto de sapato" />
                                </div>
                                <div className='w-1/6 bg-red-200 flex justify-center items-center h-32'>
                                    <img src={fotoSapato} alt="foto de sapato" />
                                </div>
                                <div className='w-1/6 bg-yellow-200 flex justify-center items-center h-32'>
                                    <img src={fotoSapato} alt="foto de sapato" />
                                </div>
                                <div className='w-1/6 bg-fuchsia-200 flex justify-center items-center h-32'>
                                    <img src={fotoSapato} alt="foto de sapato" />
                                </div>
                            </div>
            
            <div className='flex justify-between'>
                <h3 className='text-[#474747] font-extrabold text-xl tracking-wide mb-4'>Produtos Relacionados</h3>
                <div>
                    <Link>ver todos</Link>
                </div>
            </div>
        <div className='flex justify-between'>
        {cardsInfo.map((card, i) => {
          return (
            i < 4 ? <Card
                key={card.id}
                discountPercentual={card.discountPercentual}
                category={card.category}
                productName={card.productName}
                discountPrice={card.discountPrice}
                price={card.price}
                isDiscount={card.isDiscount}
                url={card.url}
              /> : ''
          );
        })}
        </div>

        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default ProductDetail
