import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";

import logoHeader from "../assets/images/logo-header.svg";
import linkCadastro from "../assets/images/cadastre_se.svg";
import carrinhoCompras from "../assets/images/carrinho.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconBusca from "../assets/images/icon-busca.svg";

export default function Header() {
  return (
    <header className="flex flex-col px-24 py-10 justify-between">
    <section className="flex py-5 items-center justify-between">
        <button className="mr-10 md:hidden">
            <img src={iconMenu} alt="icone de menu"/>
        </button>

        <a href="#" className="w-36 md:w-auto">
            <img src={logoHeader} alt="logo digital college"/>
        </a>

        <div className="md:w-1/3 mx-6 hidden md:block md:h-12 relative">
            <input className="bg-slate-100 pl-2 rounded md:w-full md:h-full outline-none" type="text" placeholder="Pesquisar produto"/>
            <button type="button" className="absolute right-0 top-0 flex justify-center items-center h-12 md:px-4">
                <img src={iconBusca} alt="icone de busca"/>
            </button>
        </div>

        <a href="#" className="hidden md:block mx-5">
            <img src={linkCadastro} alt="link para cadastro" />
        </a>

        <button type="button" className="mx-3 md:hidden">
            <img src={iconBusca} alt="icone de busca" />
        </button>

        <button className="hidden md:block bg-pink-600 text-white py-1 px-8 rounded-lg">
            Entrar
        </button>

        <button type="button">
            <img src={carrinhoCompras} alt="carrinho de compras"/>
        </button>
    </section> 

      <nav className={''}>
        <div className={'gap-4 flex font-bold text-base'}>
          <NavbarItem path='/' title='Home' />
          <NavbarItem path='/produtos' title='Produtos' />
          <NavbarItem path='/categorias' title='Categorias' />
          <NavbarItem path='/pedidosroutes' title='Meus Pedidos' />
        </div>
      </nav>
  </header>
        )
  ;
}
