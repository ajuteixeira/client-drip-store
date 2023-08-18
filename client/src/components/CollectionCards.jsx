import tShirtCollection from '../assets/images/tShirtCollection.png';
import CollectionCard from '../components/CollectionCard';
import tenisCollection from '../assets/images/tenisCollection.png';
import headPhoneCollection from '../assets/images/headPhoneCollection.png';
import Category from './Categorias';
import iconTshirt from '../assets/images/iconTshirt.svg';
import iconPants from '../assets/images/iconPants.svg';
import iconHeadphones from '../assets/images/iconHeadphones.svg';
import iconSneakers from '../assets/images/iconSneakers.svg';
import Subtitles from './Subtitles';




export default function CollectionCards() {
  return (
    <div className="flex flex-col gap-5 bg-slate-100 ">

        <div className='flex ml-44 mt-10'>
        <Subtitles type='secondary' children='Coleção de Destaques' />
        </div>
        
      
      <div className="flex gap-3 w-full mx-6 justify-center">
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
