import React from 'react'
import Card from './Card'
import ProductShowHeader from './ProductShowHeader'
import { cardsInfo } from '../utils/cardsMock'
import Filter from './Filter'


const ProductShow = () => {
    
    
    
    
    return (
        <div className='w-screen  bg-[#F9F8FE] flex flex-col items-center'>
            <div className='w-5/6 mt-12'>
            <ProductShowHeader/>
            <div className='flex justify-between mt-12'>
                <Filter/>
                <div className='flex flex-wrap gap-3 xl:justify-end xl:w-4/5 w-screen justify-between'>
                {cardsInfo.map((card) => {
                    return (
                        <Card
                        key={card.id}
                        id={card.id}
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
            </div>
            
        </div>
    )
    }

export default ProductShow
