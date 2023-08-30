import Input from './Input';

export default function Form() {
  return (
    <>
      <div className="w-full p-7 flex flex-col gap-5 text-[#474747] bg-[#FFFFFF] sm:w-4/5 lg:w-3/6">
        <h3 className="font-bold text-[#474747] lg:text-[22px]">
          Informações pessoais
        </h3>
        <hr />
        <Input
          type={'text'}
          name={'nome'}
          id={'nome'}
          placeholder={'Insira seu nome'}
          title={'Nome Completo *'}
        />
        <Input
          type={'number'}
          name={'cpf'}
          id={'cpf'}
          placeholder={'Insira seu CPF'}
          title={'CPF *'}
        />
        <Input
          type={'email'}
          name={'email'}
          id={'email'}
          placeholder={'Insira seu email'}
          title={'Email *'}
        />
        <Input
          type={'number'}
          name={'telefone'}
          id={'telefone'}
          placeholder={'Insira seu celular'}
          title={'Celular *'}
        />
      </div>
      <div className="w-full p-7 flex flex-col gap-5 text-[#474747] bg-[#FFFFFF] sm:w-4/5 lg:w-3/6">
        <h3 className="font-bold text-[#474747] lg:text-[22px]">
          Informações de entrega
        </h3>
        <hr />
        <Input
          type={'text'}
          name={'endereco'}
          id={'endereco'}
          placeholder={'Insira seu endereço'}
          title={'Endereço *'}
        />
        <Input
          type={'text'}
          name={'bairro'}
          id={'bairro'}
          placeholder={'Insira seu bairro'}
          title={'Bairro *'}
        />
        <Input
          type={'text'}
          name={'cidade'}
          id={'cidade'}
          placeholder={'Insira sua cidade'}
          title={'Cidade *'}
        />
        <Input
          type={'number'}
          name={'cep'}
          id={'cep'}
          placeholder={'Insira seu CEP'}
          title={'CEP *'}
        />
        <Input
          type={'text'}
          name={'complemento'}
          id={'complemento'}
          placeholder={'Insira o complemento'}
          title={'Complemento *'}
        />
      </div>
    </>
  );
}
