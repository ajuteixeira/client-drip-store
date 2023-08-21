import React from 'react'
import {filters, estado } from '../utils/filters'
import Done from '../assets/images/done.svg'
import { ImCheckboxUnchecked } from 'react-icons/im'

const Filter = () => {
  return (
    <div className='lg:w-96 bg-white hidden xl:flex'>
        <div className='flex flex-col w-full ml-12 mt-12'>
            <h2 className='text-[#474747] font-bold tracking-widest mb-6'>Filtrar por</h2>
            <div className='bg-slate-500 h-[1px] w-5/6 rounded mb-6' ></div>
            <div>
                {filters.map((filter)=>{
                    return(
                        <div>
                            <h2 className='font-bold tracking-wider text-[#474747] mb-3 mt-3'>{filter.type}</h2>
                            <div>
                            {filter.options.map((option)=>{
                                return(
                                    <div className='flex items-center mb-2'>
                                        <input className={`w-5 h-5 mr-3 accent-[#C92071] `} type='checkbox' value={option}/>{option}
                                    </div>
                                    
                                )
                            })}
                            </div>
                            
                        </div>
                    )
                })}
                <div>
                <h2 className='font-bold tracking-wider text-[#474747] mb-3 mt-3'>{estado.type}</h2>
                    {estado.options.map((option)=>{
                        return (
                            <div className='flex items-center mb-2'>
                                <input type='radio' name='estado' className='h-5 w-5 mr-3 accent-[#C92071]' value={option}/>{option}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      
    </div>
    
  )
}

export default Filter
