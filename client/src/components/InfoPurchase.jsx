import { useState } from "react"

export default function InfoPurchase () {
    const [infoPagamento , setInfoPagamento] = useState({
        titulo_cartao : "FRANCISMO A P",
        final : "*********2020"
    })

    return (
        <section className="flex flex-col space-y-2 py-3">
            <h2 className="tracking-wide font-semibold text-slate-700 text-lg">Informações de Pagamento</h2>
            <div className="flex flex-col items-start space-y-3">
                <p><span className="text-slate-400">Título do Cartão: </span> {infoPagamento.titulo_cartao}</p>
                <p><span className="text-slate-400">Final: </span> {infoPagamento.final}</p>
            </div>
        </section>
    )
}