import Text from '../components/Text';
import NavbarItem from './NavbarItem';


export default function informations() {
  return (
    <div className="flex flex-col w-[890px] h-[466px] align-itens:flex-star p-[30px] bg-white">
      <div className="flex justify-between  ">
        <div>
          <Text type="UPgray-description" children="Minhas Informações" />
        </div>
        <div>
            <NavbarItem path='/' title='editar' />
        </div>
      </div>

      <div className="border-b mt-5 mb-5 border-gray-500"></div>

    
      



    </div>
  );
}
