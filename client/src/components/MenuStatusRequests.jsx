import Text from '../components/Text';
import Subtitles from '../components/Subtitles';
import Sneakers from '../assets/images/sneakers.png'

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

      <div className="flex justify-between ">
        <div className="flex">
          <div className="bg-[#E2E3FF] w-[72px] h-[58px]">
            <img className='flex m-3' src={Sneakers} alt=""></img>
          </div>
          <p className="flex flex-col pl-4">
            <Text type="mini-description" children="Pedido n 82874862532" />
            <Subtitles
              type="third2"
              children="Tênis Nike Revolution 6 Next Nature Masculino"
            />
          </p>
        </div>
        <p className="mt-4">ANDAMENTO</p>
      </div>

      <div className="border-b mt-5 mb-5 border-gray-500"></div>

      <div className="flex justify-between ">
        <div className="flex">
          <div className="bg-[#E2E3FF] w-[72px] h-[58px]">
          <img className='flex m-3' src={Sneakers} alt=""></img>
          </div>
          <p className="flex flex-col pl-4">
            <Text type="mini-description" children="Pedido n 82874862532" />
            <Subtitles
              type="third2"
              children="Tênis Nike Revolution 6 Next Nature Masculino"
            />
          </p>
        </div>
        <p className="mt-4">ANDAMENTO</p>
      </div>

      <div className="border-b mt-5 mb-5 border-gray-500"></div>

      <div className="flex justify-between ">
        <div className="flex">
          <div className="bg-[#E2E3FF] w-[72px] h-[58px]">
          <img className='flex m-3' src={Sneakers} alt=""></img>
          </div>
          <p className="flex flex-col pl-4">
            <Text type="mini-description" children="Pedido n 82874862532" />
            <Subtitles
              type="third2"
              children="Tênis Nike Revolution 6 Next Nature Masculino"
            />
          </p>
        </div>
        <p className="mt-4">ANDAMENTO</p>
      </div>

      <div className="border-b mt-5 mb-5 border-gray-500"></div>

      <div className="flex justify-between ">
        <div className="flex">
          <div className="bg-[#E2E3FF] w-[72px] h-[58px]">
          <img className='flex m-3' src={Sneakers} alt=""></img>
            
          </div>
          <p className="flex flex-col pl-4">
            <Text type="mini-description" children="Pedido n 82874862532" />
            <Subtitles
              type="third2"
              children="Tênis Nike Revolution 6 Next Nature Masculino"
            />
          </p>
        </div>
        <p className="mt-4">ANDAMENTO</p>
      </div>

      <div className="border-b mt-5 mb-5 border-gray-500"></div>

      <div className="flex justify-between ">
        <div className="flex">
          <div className="bg-[#E2E3FF] w-[72px] h-[58px]">
          <img className='flex m-3' src={Sneakers} alt=""></img>
          </div>
          <p className="flex flex-col pl-4">
            <Text type="mini-description" children="Pedido n 82874862532" />
            <Subtitles
              type="third2"
              children="Tênis Nike Revolution 6 Next Nature Masculino"
            />
          </p>
        </div>
        <p className="mt-4">ANDAMENTO</p>
      </div>

      



    </div>
  );
}
