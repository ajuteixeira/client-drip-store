import Footer from '../components/Footer';
import Button from '../components/Button';
import tenisLogin from '../assets/images/tenisLogin.png';
import gmailLogin from '../assets/images/gmailLogin.svg';
import facebookLogin from '../assets/images/facebookLogin.svg';
import SimpleHeader from '../components/SimpleHeader';
import Input from '../components/Input';

export default function Login() {
  return (
    <>
      <SimpleHeader />
      <section className="w-full px-7 py-12 flex justify-center items-start bg-gradient-to-br from-[#b5b6f2] to-[#f0f0f7] sm:p-15">
        <div className="w-full p-7 flex flex-col gap-7 bg-white rounded md:max-w-sm lg:max-w-md">
          <div className="flex flex-col gap-5 justify-center items-start">
            <div className="w-full flex flex-col gap-1 items-center md:items-start">
              <h2 className="text-[22px] text-[#1f1f1f] font-bold lg:text-[32px]">
                Acesse sua conta
              </h2>
              <p className="text-[14px] text-[#474747] lg:text-[16px]">
                Novo cliente? Então registre-se{' '}
                <a className="underline" href="/criar-conta">
                  aqui
                </a>
              </p>
            </div>
            <div className="w-full flex flex-col gap-3">
              <Input
                type={'text'}
                name={'login'}
                id={'login'}
                placeholder={'Insira seu login ou email'}
                title={'Login *'}
              />
              <Input
                type={'password'}
                name={'senha'}
                id={'senha'}
                placeholder={'Insira sua senha'}
                title={'Senha *'}
              />
            </div>
            <a
              className="underline text-[14px] text-[#474747] lg:text-[16px]"
              href="#"
            >
              Esqueci minha senha
            </a>
            <Button type="full" color="pink" title={'Acessar conta'} />
          </div>
          <div className="flex gap-3 justify-center items-center">
            <p className="text-[14px] text-[#474747] lg:text-[16px]">
              Ou faça login com
            </p>
            <a href="#">
              <img src={gmailLogin} alt="ícone gmail" />
            </a>
            <a href="#">
              <img src={facebookLogin} alt="ícone facebook" />
            </a>
          </div>
        </div>
        <img
          className="hidden md:block md:w-2/4 lg:max-w-xl"
          src={tenisLogin}
          alt=""
        />
      </section>
      <Footer />
    </>
  );
}
