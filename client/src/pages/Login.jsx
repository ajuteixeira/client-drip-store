import tenisLogin from '../assets/images/tenisLogin.png';
import Button from '../components/Button';
import gmailLogin from '../assets/images/gmailLogin.svg';
import facebookLogin from '../assets/images/facebookLogin.svg';

export default function Login() {
  return (
    <section className="w-full p-7 flex justify-center items-start bg-gradient-to-r from-[#b5b6f2]">
      <div className="w-full bg-white rounded">
        <div className="p-7 flex flex-col gap-7 justify-center items-start">
          <h2 className="text-[32px] font-bold">Crie sua conta</h2>
          <p>
            Novo cliente? Então registre-se{' '}
            <a className="underline" href="#">
              aqui
            </a>
          </p>
          <a className="underline" href="#">
            Esqueci minha senha
          </a>
          <Button type="default" color="pink" title={'Ver ofertas'} />
          <div className='flex gap-3 justify-center items-center'>
            <p>Ou faça login com</p>
            <img src={gmailLogin} alt="" />
            <img src={facebookLogin} alt="" />
          </div>
        </div>
      </div>
      <img src={tenisLogin} alt="" />
    </section>
  );
}
