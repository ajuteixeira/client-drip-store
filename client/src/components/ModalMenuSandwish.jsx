import React from 'react'
import NavbarItem from './NavbarItem'
import Text from './Text'
import Button from './Button'


const ModalMenuSandwish = (props) => {
  return (
    <div className='h-[702px] flex flex-col w-48 p-[30px] bg-white absolute'>
        <div className='flex flex-col justify-between h-screen'>
            <nav className={''}>
              <ul className={'gap-2 flex flex-col font-bold text-base'}>
                <li>
                  <Text type='UPgray-description' className='text-[16px]' title="Páginas" />
                </li>
                <li>
                  <NavbarItem path="/" title="Home" />
                </li>
                <li>
                  <NavbarItem path="/produtos" title="Produtos" />
                </li>
                <li>
                  <NavbarItem path="/categorias" title="Categorias" />
                </li>
                <li>
                  <NavbarItem path="/pedidosroutes" title="Meus Pedidos" />
                </li>
              </ul>
            </nav>
            <div className='mt-auto'>
              <hr className=' border-t-2 border-gray-300 my-6'></hr>
              <div className='gap-2 flex flex-col font-bold text-base'>
                <Button color='pink' type='default' title="Entrar" />
                <Button type='link' title="Cadastre-se" className='text-[#474747]' />
              </div>
            </div>
            
        </div>
      
    </div>
    
  )
}

export default ModalMenuSandwish
