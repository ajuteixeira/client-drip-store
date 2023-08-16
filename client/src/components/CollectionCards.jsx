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
    </div>
  );
}
