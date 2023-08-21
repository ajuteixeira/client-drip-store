import Subtitles from './Subtitles';
import Title from './Title';
import Text from './Text';
import Button from './Button';
import heroProduct from '../assets/images/hero-product.png';

export default function Hero() {
  return (
    <>
      <section className="w-full p-7 flex flex-col-reverse items-center justify-center bg-[#f5f5f5] sm:p-20 sm:flex-row sm:justify-start lg:gap-20">
        <div className="flex flex-col items-center justify-center gap-3 sm:items-start">
          <Subtitles type="primary">Melhores ofertas personalizadas</Subtitles>
          <Title type="primary">
            Queima de <br />
            estoque Nike 🔥
          </Title>
          <Text type="description">
            Consequat culpa exercitation mollit nisi except do do tempor laboris
            eiusmod irure consecte.
          </Text>
          <Button type="default" color="pink" title={'Ver ofertas'} />
        </div>
        <div className="w-full sm:max-w-[600px]">
          <img src={heroProduct} alt="White sneakers" />
        </div>
      </section>
    </>
  );
}
