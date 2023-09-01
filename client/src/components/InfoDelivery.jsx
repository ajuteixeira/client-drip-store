import { useState } from "react"

export default function InfoDelivery () {
    const [infoEntregas , setInfoEntregas] = useState({
        endereco : "Rua 01",
        bairro : "Centro",
        cidade : "Fortaleza , Ceará",
        cep : "433-8800"
    });

    return (
        <section className="flex flex-col space-y-2 py-3">
            <h2 className="tracking-wide font-semibold text-slate-700 text-lg">Informações de Entrega</h2>
            <div className="flex flex-col items-start space-y-3">
                <p><span className="text-slate-400">Endereço: </span> {infoEntregas.endereco}</p>
                <p><span className="text-slate-400">Bairro: </span> {infoEntregas.bairro}</p>
                <p><span className="text-slate-400">Cidade: </span> {infoEntregas.cidade}</p>
                <p><span className="text-slate-400">CEP: </span> {infoEntregas.cep}</p>
            </div>
        </section>
    )
}