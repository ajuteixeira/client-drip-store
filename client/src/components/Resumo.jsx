import Text from "./Text"

export default function resumo () {
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



        </div>
    )
}