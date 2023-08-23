import Text from "./Text"

export default function menuRequests () {

    return (
        <div className="flex flex-col w-[334px] h-[318px] align-itens:flex-star p-[30px] bg-white">

            <div>
                <Text type= 'UPgray-description' children="Meu Perfil" /> 
            </div>

            <div className="border-b mt-5 mb-5 border-gray-500" >

            </div>
            <div>
                <Text type= 'UPgray-description' children="Meus Pedidos" /> 
            </div>

            <div className="border-b mt-5 mb-5 border-gray-500" >

            </div>
            <div>
                <Text type= 'UPgray-description' children="Minhas Informações" /> 
            </div>

            <div className="border-b mt-5 mb-5 border-gray-500" >

            </div>
            <div>
                <Text type= 'UPgray-description' children="Métodos de Pagamento" /> 
            </div>

            


        </div>
    )
}