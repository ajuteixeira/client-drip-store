import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";

export default function Header() {
  return (
        <nav
          className={''}>

            <div className={'gap-4 ml-8 flex font-bold text-base mt-[134px] mb-[30px] ml-[100px]'}>
              <NavbarItem path='/' title='Home' />
              <NavbarItem path='/produtos' title='Produtos' />
              <NavbarItem path='/categorias' title='Categorias' />
              <NavbarItem path='/meuspedidos' title='Meus Pedidos' />
            </div>

        </nav>
        )
  ;
}
