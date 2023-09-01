import SimpleHeader from '../components/SimpleHeader';
import Form from '../components/Form';
import Button from '../components/Button';
import Footer from '../components/Footer';

export default function CreateAccountForm() {
  return (
    <>
      <SimpleHeader />
      <section className="w-full h-full px-7 pt-9 pb-28 flex flex-col justify-center gap-5 sm: items-center bg-[#F9F8FE]">
        <h2 className="w-full pt-5 flex flex-col gap-5 text-center text-[22px] text-[#1f1f1f] font-bold lg:text-[32px] sm:w-4/5 lg:w-3/6 lg:text-left">
          Criar conta
        </h2>
        <Form />
        <div className="w-full flex flex-col gap-5 text-[#474747] sm:w-4/5 lg:w-3/6">
          <div className="flex gap-2 items-start">
            <input
              className="accent-[#C92071]"
              type="checkbox"
              id="emailmkt"
              name="emailmkt"
              checked
            />
            <label
              className="text-xs font-medium text-[#474747]"
              for="emailmkt"
            >
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </label>
          </div>
          <Button
            type="full"
            color="pink"
            title={<a href="/">Criar conta</a>}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
