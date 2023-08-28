import BannerShoes from '../assets/images/shoesBanner.svg';
import Elipse from '../assets/images/elipse.svg';

export default function CardShoes() {
  return (
    <section className="flex md:flex-row md:justify-center md:items-center flex-col p-10">
      <div className="relative">
        <img
          className="w-full md:w-auto"
          src={BannerShoes}
          alt="banner tenis nike"
        />
        <div className="absolute top-0 w-full flex justify-center">
          <img src={Elipse} alt="plano de fundo do banner" />
        </div>
      </div>

      <div className="flex flex-col md:w-1/2 pt-20 md:px-8 space-y-4 items-start">
        <span className="md:text-pink-600 text-yellow-500 tracking-widest md:tracking-normal font-semibold">
          Oferta Especial
        </span>
        <h2 className="font-bold tracking-widest md:tracking-normal text-3xl md:text-5xl text-slate-700">
          Air Jordan edição de colecionador
        </h2>
        <p className="text-slate-600 md:leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
        <button className="bg-pink-600 px-10 py-1 rounded-lg text-white font-semibold">
          Ver Oferta
        </button>
      </div>
    </section>
  );
}
