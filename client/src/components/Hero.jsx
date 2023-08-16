import Subtitles from './Subtitles';
import Title from './Title';
import Text from './Text';
import Button from './Button';
import heroProduct from '../assets/images/hero-product.png';

export default function Hero() {
  return (
    <>
      <section className="hero px-20 flex items-center justify-center bg-[#f5f5f5]">
        <div className="flex flex-col items-start justify-center gap-2">
          <Subtitles type="primary">Melhores ofertas personalizadas</Subtitles>
          <Title type="primary">
            Queima de
            <br />
            stoque Nike 🔥
          </Title>
          <Text type="description">
            Consequat culpa exercitation mollit nisi except <br /> do do tempor
            laboris eiusmod irure consecte.
          </Text>
          <Button type="default" color="pink" title={'Ver ofertas'} />
        </div>
        <div className="w-[600px]">
          <img src={heroProduct} alt="White sneakers" />
        </div>
      </section>
    </>
  );
}
