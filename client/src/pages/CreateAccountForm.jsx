import SimpleHeader from '../components/SimpleHeader'
import Form from '../components/Form'
import Button from '../components/Button'
import Footer from '../components/Footer'

export default function CreateAccountForm() {
    return (
        <>
            <SimpleHeader />
            <section className='p-7 flex justify-center bg-[#F9F8FE]'>
                <div className='w-full flex flex-col items-center gap-5'>
                    <h2 className="text-[22px] text-[#1f1f1f] font-bold lg:text-[32px]">
                        Criar conta
                    </h2>
                    <Form />
                    <div className='flex gap-2'>
                        <input type="checkbox" id='emailmkt' name='emailmkt' />
                        <label className='text-[#474747]' fot="emailmkt">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
                    </div>
                    <Button type="full" color="pink" title={'Criar Conta'} />
                </div>
            </section>
            {/* <Footer/> */}
        </>
    )
}