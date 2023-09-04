import { useState } from "react"

export default function InfoPersonPurchase () {
    const [infoPessoais , setInfoPessoais] = useState({
        name : "Francisco Antonio",
        cpf : "123323957-33",
        email : "francismo@gmail.com",
        cel : "(85) 5555-555"
    });

    return (
        <section className="flex flex-col space-y-2 py-3">
            <h2 className="tracking-wide font-semibold text-slate-700 text-lg">Informações Pessoais</h2>
            <div className="flex flex-col items-start space-y-3">
                <p><span className="text-slate-400">Nome: </span> {infoPessoais.name}</p>
                <p><span className="text-slate-400">CPF: </span> {infoPessoais.cpf}</p>
                <p><span className="text-slate-400">Email: </span> {infoPessoais.email}</p>
                <p><span className="text-slate-400">Celular: </span> {infoPessoais.cel}</p>
            </div>
        </section>
    )
}