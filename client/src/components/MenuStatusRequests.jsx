import Text from '../components/Text';
import { cardPedido } from '../utils/PedidosMock';
import Pedido from './Pedido';
export default function menuRequests() {
  return (
    <div className="flex flex-col w-[890px] h-[572px] align-itens:flex-star p-[30px] bg-white">
      <div className="flex justify-between  ">
        <div>
          <Text type="UPgray-description" children="Meus Pedidos" />
        </div>
        <div>
          <Text type="UPgray-description" children="STATUS" />
        </div>
      </div>

      <div className="border-b mt-5 mb-5 border-gray-500"></div>

      <div className="flex justify-between flex-col">
        {cardPedido.map((pedido) => (
          <Pedido
            key={pedido.id}
            numero={pedido.numero}
            produto={pedido.produto}
            status={pedido.status}
            url={pedido.url}
          />
        ))}
      </div>
    </div>
  );
}
