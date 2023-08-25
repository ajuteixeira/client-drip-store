import Text from "./Text"
import NavbarItem from "./NavbarItem";


export default function menuRequests () {

    return (
        <div className="flex flex-col w-[334px] h-[318px] align-itens:flex-star p-[30px] bg-white">

          <div >
          <NavbarItem path='/' title='Meu Perfil' />
          </div>

            <div className="border-b mt-5 mb-5 border-gray-500" >

            </div>
            <div className={''}>
                <NavbarItem path='/pedidosroutes' title='Meus Pedidos' />
          </div>

            <div className="border-b mt-5 mb-5 border-gray-500" >

            </div>
            <div className={''}>
                <NavbarItem path='/informations' title='Minhas Informações' />
          </div>

            <div className="border-b mt-5 mb-5 border-gray-500" >

            </div>
            <div className={''}>
                <NavbarItem path='/' title='Métodos de Pagamento' />
          </div>

            


        </div>
    )
}