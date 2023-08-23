import tShirtCollection from '../assets/images/tShirtCollection.png';
import Button from '../components/Button';
import CollectionCard from '../components/CollectionCard';
import tenisCollection from '../assets/images/tenisCollection.png';
import headPhoneCollection from '../assets/images/headPhoneCollection.png';
import Subtitles from './Subtitles';

export default function CollectionCards() {
  return (
    <div className="flex flex-col gap-5 p-7 sm:p-20 bg-[#F9F8FE]">
      <Subtitles type="secondary">Produtos em alta</Subtitles>
      <div className="flex gap-3 w-full">
        <CollectionCard img={tShirtCollection} title="Supreme drop" />
        <CollectionCard img={tenisCollection} title="Coleção Adidas" />
        <CollectionCard img={headPhoneCollection} title="Novo Beats Bass" />
      </div>
      <div className=" flex flex-col justify-center items-center mt-20">
   
   <Subtitles type='secondary' children = 'Coleção em Destaques' />
    

      <div className="flex gap-10 pt-6 mx-60">
        <Category img={iconTshirt} />
        <Category img={iconPants} />
        <Category img={iconPants} />
        <Category img={iconHeadphones} />
        <Category img={iconSneakers} />
      </div>

      <div className='flex flex-row justify-center gap-24 pt-2 pb-2 mr-10 mb-10' > 

      <Subtitles type='third2' children ="Camiseta"/>
      <Subtitles type='third2' children ="Calça"/>
      <Subtitles type='third2' children ="Boné"/>
<Subtitles type='third2' children ="Headphone"/>
<Subtitles type='third2' children ="Tênis"/>

</div>
  
</div>
    
  
     
    </div>
    
  );

  
}
