import FooterIcons from './FooterIcons';
import logo from "../assets/images/logobranco.png";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-black pt-6 absolute w-full  ">
        <div className="conteudo flex m-10 mx-10 justify-between"></div>
        <div className='flex gap-24'>
        <div className="sobre gap-2 p-8 text-white">
          <div className="logotipo flex items-start gap-2 mb-6">
            <img src={logo} alt="" />
            <h1 className="digistore font-semibold text-2xl"> Digital Store</h1>
          </div>
          <p className="descricao w-72 text-white font-normal text-base leading-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <FooterIcons />
        </div>

        <div className="bloco flex gap-32 text-white">
          <div className="informacao py-9 cursor-pointer">
            <h1 className="titulo text-lg font-semibold ">Informação</h1>
            <p className="texto text-base font-normal">Sobre Drip Store</p>
            <p className="texto text-base font-normal">Segurança</p>
            <p className="texto text-base font-normal">Wishlist</p>
            <p className="texto text-base font-normal">Blog</p>
            <p className="texto text-base font-normal">Trabalhe conosco</p>
            <p className="texto text-base font-normal">Meus pedidos</p>
          </div>
          <div className="categorias py-9 cursor-pointer ">
            <h1 className="titulo text-lg font-semibold">Categorias</h1>
            <p className="texto text-base font-normal">Camisetas</p>
            <p className="texto text-base font-normal">Calças</p>
            <p className="texto text-base font-normal">Bonés</p>
            <p className="texto text-base font-normal">Headphones</p>
            <p className="texto text-base font-normal">Tênis</p>
          </div>
          <div className="contato text-lg font-semibold text-white py-9 cursor-pointer ">
            <h1 className="titulo font-semibold text-lg cursor-pointer ">
              Contato
            </h1>
            <p className="local leading-normal w-80 text-base font-normal">
              Av. Santos Dumont, 1510- 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>
            <p className="text-base font-normal">(85) 3051-3411</p>
          </div>
        </div>
        </div>
        <hr />
        <span className="dc flex justify-center font-normal py-5 text-white">
          @ 2022 Digital College
        </span>
      </footer>
    </>
  );
}
