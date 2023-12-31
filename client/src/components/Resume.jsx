import Button from "./Button"
import Text from "./Text"

export default function Resumo() {
    return (

        <div className="flex flex-col w-[334px] h-[364px] align-itens:flex-star p-[30px] bg-white">

            <div>
                <Text type= 'UPgray-description' children='RESUMO'/>
            </div>

            <div className="border-b mt-5 border-gray-500" >

            </div>

            <div className="mt-5">
            <Text type= 'gray-description' children='Subtotal:'/>
            </div>

            <div className="mt-5">
            <Text type= 'gray-description' children='Frete:'/>
            </div>

            <div className="mt-5">
            <Text type= 'gray-description' children='Desconto:'/>
            </div>

            <div className="mt-5">
            <Text type= 'description' children='Total:'/>
            </div>

            <div>
                <Text type= 'gray-description' children= 'ou 10x de R$ 21,00 sem juros' />
            </div>

            <div className="m- mt-6 ">
                <Button type='default' color='yellow-full' title='Continuar' />
            </div>



        </div>
    )
}
