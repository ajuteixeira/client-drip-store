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
                    <div className='flex flex-col gap-4 bg-orange-500 w-1/2'>
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
                                <p>()</p>
                            </div>
                       </div>
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
