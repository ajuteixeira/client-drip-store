import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { cardsInfo } from '../utils/cardsMock'
import Header from '../components/Header'
import CollectionCards from '../components/CollectionCards'
import CollectionCard from '../components/CollectionCard'
import Card from '../components/Card'
import Footer from '../components/Footer'
import fotoSapato from '../assets/images/fotoSapato.png'
import starVazia from '../assets/images/starVazia.png'
import star from '../assets/images/star.png'
import Button from '../components/Button'

const ProductDetail = () => {

    let { itemId } = useParams()
    let cardItem = cardsInfo.filter(item => item.id == itemId)
    console.log(cardItem)
    const colors = '#CECDF5'
        
    
    
  return (
    <>
    <Header/>
    <div className='bg-[#f5f5f5] w-full pt-4'>
        <div className='px-24 '>
            <h2 className='mb-8'>Home / Produtos / {cardItem[0].category} / Nike / {cardItem[0].productName}</h2>
                <div className=' flex '>
                    <div className='w-1/2 '>
                            <img src={cardItem[0].url} alt="foto do produto" className={`w-full bg-[${colors}]`}/>
                            <div className='flex   overflow-hidden mt-5 justify-between mb-14'>
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
                            <span className='ava'>(90 avaliações) </span>
                       </div>
                       <div className='texto'>
                       <span className='RS text-[#474747]  w-7'>R$</span>
                       <span className='price text-[#474747] text-3xl ml-2 font-black'>219,00</span>
                       <p className='descript text-gray-600 tracking-wider'>Descrição do produto</p>
                       <span className='text  text-[#474747]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
                       </div>
                       
                        <div>
                       <p className='size text-gray-600 tracking-wider'>Tamanho</p>
                       <button className='b1'>39</button>
                       <button className='b2 ml-2'>40</button>
                       <button className='b3 ml-2'>41</button>
                       <button className='b4 ml-2'>42</button>
                       <button className='b5 ml-2'>43</button>
                       </div>

                      <div>
                       <p className='cor'>Cor</p>
                       <div className='flex gap-2'>
                            <input className='decora B1 bg-blue-200 accent-sky-200 w-6 h-6'type='radio' name='color' ></input>
                            <input className='B2  bg-orange-200 accent-amber-200 w-6 h-6'type='radio'  name='color'></input>
                            <input className='B3  bg-red-200 accent-red-200 w-6 h-6'type='radio' name='color'></input>
                            <input className='B4  bg-yellow-200 accent-yellow-200 w-6 h-6'type='radio' name='color'></input>
                       </div>
                          
                       </div>
                    <Button color='yellow' type='default'>Comprar</Button>
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
