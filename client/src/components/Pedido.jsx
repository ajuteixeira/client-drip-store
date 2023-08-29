import Subtitles from './Subtitles';
import Text from './Text';

export default function Pedido(props) {
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex">
          <div className="bg-[#E2E3FF] w-[72px] h-[58px]">
            <img className="flex" src={props.url} alt=""></img>
          </div>
          <p className="flex flex-col pl-4">
            {props.numero ? (
              <Text
                type="mini-description"
                className="leading-[10px]"
                children={`Pedido n ${props.numero} `}
              />
            ) : (
              ''
            )}

            <Subtitles type="third2" children={props.produto} />
          </p>
        </div>
        {props.status === 'Produtos em transito' && (
          <span className="text-[#F6AA1C]">Produtos em Transito</span>
        )}

        {props.status === 'Cancelado' && (
          <span className="text-[#EE4266]">Cancelado</span>
        )}

        {props.status === 'Finalizado' && (
          <span className="text-[#8F8F8F]">Finalizado</span>
        )}
      </div>
      <div className="border-b mt-5 mb-5 border-gray-500"></div>
    </>
  );
}
