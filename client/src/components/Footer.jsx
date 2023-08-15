export default function Footer() {
  return (
    <>
      <div className="bloco flex">
        <div className="informacao">
          <h1 className="titulo text-lg font-semibold ">Informação</h1>
          <p className="texto text-base font-normal">Sobre Drip Store</p>
          <p className="texto text-base font-normal">Segurança</p>
          <p className="texto text-base font-normal">Wishlist</p>
          <p className="texto text-base font-normal">Blog</p>
          <p className="texto text-base font-normal">Trabalhe conosco</p>
          <p className="texto text-base font-normal">Meus pedidos</p>
        </div>
        <div className="categorias">
          <h1 className="titulo text-lg font-semibold">Categorias</h1>
          <p className="texto text-base font-normal">Camisetas</p>
          <p className="texto text-base font-normal">Calças</p>
          <p className="texto text-base font-normal">Bonés</p>
          <p className="texto text-base font-normal">Headphones</p>
          <p className="texto text-base font-normal">Tênis</p>
        </div>
      </div>
      <div className="contato">
        <h1 className="titulo text-lg font-semibold">Contato</h1>
        <p className="local">
          Av. Santos Dumont, 1510- 1 andar - Aldeota, Fortaleza - CE, 60150-161
        </p>
        <p>(85) 3051-3411</p>
      </div>
      <hr />
      <span className="dc">@ 2022 Digital College</span>
    </>
  );
}