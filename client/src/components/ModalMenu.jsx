import React from 'react'
import NavbarItem from './NavbarItem'

const ModalMenu = (props) => {
    

  return (
    <div className={`h-48 w-48 bg-white absolute `}>
        <div>
            {usuario ? <h2>Olá {usuario}</h2> : <h2>cadastre-se</h2>}
            
            <nav className={''}>
            <div className={'gap-2 flex flex-col font-bold text-base'}>
                <NavbarItem path="/" title="Home" />
                <NavbarItem path="/produtos" title="Produtos" />
                <NavbarItem path="/categorias" title="Categorias" />
                <NavbarItem path="/pedidosroutes" title="Meus Pedidos" />
            </div>
            </nav>
            
        </div>
      
    </div>
    
  )
}

export default ModalMenu
