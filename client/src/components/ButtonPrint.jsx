export default function ButtonPrint ({handlePrint}) {
    // handlePrint é uma função ficticia , que seria para imprimir o comprovante
    // que pode ser chamada de algum contexto do react 
    return (
        <div className="flex justify-center py-4">
            <button className="underline text-slate-600" onClick={() => handlePrint} >Imprimir Recibo</button>
        </div>
    )
}