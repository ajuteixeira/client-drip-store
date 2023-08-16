import tShirtCollection from '../assets/images/tShirtCollection.png';
import Button from '../components/Button';
import CollectionCard from '../components/CollectionCard';
import tenisCollection from '../assets/images/tenisCollection.png';
import headPhoneCollection from '../assets/images/headPhoneCollection.png';

export default function CollectionCards() {
  return (
    <div className="flex flex-col gap-5">
      <h3 className='font-bold text-2xl'>Coleções em destaque</h3>
      <div className="flex gap-3 w-full">
        <CollectionCard img={tShirtCollection} title="Supreme drop" />
        <CollectionCard img={tenisCollection} title="Coleção Adidas" />
        <CollectionCard img={headPhoneCollection} title="Novo Beats Bass" />
      </div>
    </div>
  );
}
