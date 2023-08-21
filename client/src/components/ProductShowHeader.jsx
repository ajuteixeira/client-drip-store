import React from 'react'
import Button from './Button'
import SetaBaixo from '../assets/images/setaBaixo.svg'

const ProductShowHeader = () => {
    const busca = 'Tennis'
    const numResultados = 389    
    const tipoBusca = 'mais revelantes'

  return (
    <div className='flex justify-between'>
        <div>
            <spam className='font-bold text-[#474747]'>Resultados para "{busca}"</spam>
            <spam> - {numResultados} produtos</spam>
        </div>
        <Button type='filter'>
            <div className='flex justify-between'>
                
                <spam className='font-bold text-[#474747]'>Ordenar por: </spam>
                <spam className='ml-2'>{tipoBusca}</spam>
                <img src={SetaBaixo} className='ml-5'/>
            </div>
        
        </Button>
    </div>
  )
}

export default ProductShowHeader
